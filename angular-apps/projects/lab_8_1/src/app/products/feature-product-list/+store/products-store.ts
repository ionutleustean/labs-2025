import {patchState, signalStore, withComputed, withMethods, withState} from '@ngrx/signals';
import {PizzaModel} from '../../../pizzas/domain/pizza.model';
import {computed, inject} from '@angular/core';
import {PizzaResourceService} from '../../data-access/pizza-resource.service';
import {tap} from 'rxjs';


export const productStore = signalStore(
  withState({
    loading: false,
    pizzas: [] as PizzaModel[]
  }),
  withComputed((state) => ({
    pizzaAsProducts : computed(() => {
      return state.pizzas().map(pizza => {
        return {
          id: pizza.id,
          imageUrl: pizza.imageUrl,
          title: pizza.name,
          description: pizza.description,
          price: pizza.price,
          rating: 0,
          type: 'pizza' as 'pizza' | 'burger' | 'pasta'
        }
      })
    })

  })),
  withComputed(state => ({
    products : computed(() => {
      return [...state.pizzaAsProducts()]
    })
  })),
  withMethods((state, pizzaResource = inject(PizzaResourceService)) => ({
    getAllPizzas : () => {
      patchState(state, {loading: true});
      pizzaResource.getAllPizzas()
        .pipe(tap(data => {
          patchState(state, {
            loading: false,
            pizzas: data
          })
        }))
        .subscribe()
    }
  }))
)
