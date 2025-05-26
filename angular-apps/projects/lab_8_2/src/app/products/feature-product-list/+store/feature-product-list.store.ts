import {patchState, signalStore, withComputed, withMethods, withState} from '@ngrx/signals';
import {PizzaModel} from '../../../pizzas/domain/pizza.model';
import {BurgerModel} from '../../domain/burger.model';
import {ProductModel} from '../../domain/product.model';
import {computed, inject} from '@angular/core';
import {PizzaResourceService} from '../../data-access/pizza-resource.service';
import {tap} from 'rxjs';
import {PastaModel} from '../../domain/pasta.model';


export const featureProductListStore = signalStore(
  withState({
    loading: false,
    pizzas: [] as PizzaModel[],
    burgers: [] as BurgerModel[],
    pasta: [] as PastaModel[],
  }),

  withComputed((state) => ({
    pizzasAsProducts: computed<ProductModel[]>(() => {
      return state.pizzas().map(pizza => {
        return {
          id: pizza.id,
          imageUrl: pizza.imageUrl,
          title: pizza.name,
          description: pizza.description,
          price: pizza.price,
          rating: 0,
          type: 'pizza'
        }
      })
    }),

  })),

  withComputed((state) => ({
    products: computed<ProductModel[]>(() => {
      return [...state.pizzasAsProducts()]
    })
  })),

  withMethods((state, pizzaService = inject(PizzaResourceService)) => ({
    loadPizzas: () => {
      patchState(state, {loading: true});
      pizzaService.getAllPizzas()
        .pipe(
          tap(data => {
            patchState(state, {
              loading: false,
              pizzas: data
            })
          })
        )
        .subscribe()
    }
  }))
)
