import {patchState, signalStore, withComputed, withMethods, withState} from '@ngrx/signals';
import {PizzaModel} from '../../../pizzas/domain/pizza.model';
import {BurgerModel} from '../../domain/burger.model';
import {ProductModel} from '../../domain/product.model';
import {computed, inject} from '@angular/core';
import {PizzaResourceService} from '../../data-access/pizza-resource.service';
import {tap} from 'rxjs';
import {PastaModel} from '../../domain/pasta.model';
import {BurgerResourceService} from '../../data-access/burger-resource.service';
import {PastaResourceService} from '../../data-access/pasta-resource.service';


export const featureProductListStore = signalStore(
  withState({
    loading: 0,
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
    burgersAsProducts: computed<ProductModel[]>(() => {
      return state.burgers().map(burger => {
        return {
          id: burger.id,
          imageUrl: burger.imageUrl,
          title: burger.title,
          description: burger.description,
          price: burger.price,
          rating: 0,
          type: 'burger'
        }
      })
    }),
    pastasAsProducts: computed<ProductModel[]>(() => {
      return state.pasta().map(pasta => {
        return {
          id: pasta.id,
          imageUrl: pasta.imageUrl,
          title: pasta.title,
          description: pasta.description,
          price: pasta.price,
          rating: 0,
          type: 'pasta'
        }
      })
    })

  })),

  withComputed((state) => ({
    products: computed<ProductModel[]>(() => {
      return [...state.pizzasAsProducts(), ...state.burgersAsProducts(), ...state.pastasAsProducts()]
    })
  })),

  withMethods((state, pizzaService = inject(PizzaResourceService), burgerService = inject(BurgerResourceService), pastaService = inject(PastaResourceService)) => ({
    loadPizzas: () => {
      patchState(state, {loading: state.loading() + 1});
      pizzaService.getAllPizzas()
        .pipe(
          tap(data => {
            patchState(state, {
              loading: state.loading() - 1,
              pizzas: data
            })
          })
        )
        .subscribe()
    },

    loadBurgers: () => {
      patchState(state, {loading: state.loading() + 1});
      burgerService.getAllBurgers()
        .pipe(
          tap(data => {
            patchState(state, {
              loading: state.loading() - 1,
              burgers: data
            })
          })
        )
        .subscribe()
    },
    loadPastas: () => {
      patchState(state, {loading: state.loading() + 1});
      pastaService.getAllPastas()
        .pipe(
          tap(data => {
            patchState(state, {
              loading: state.loading() - 1,
              pasta: data
            })
          })
        )
        .subscribe()
    }
  }))
)
