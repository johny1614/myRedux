import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogComponent } from './containers/dog/dog.component';
import {StoreModule} from '@ngrx/store';
import {dogReducer} from './store/reducers/dog.reducer';
import {HttpClientModule} from '@angular/common/http';
import {DogEffects} from './store/effects/dog.effects';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  declarations: [DogComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('dogs', dogReducer),
    EffectsModule.forFeature([DogEffects]),
    HttpClientModule
  ],
  exports:[
    DogComponent
  ],
})
export class DogModule { constructor(){console.log("dogModule")}}
