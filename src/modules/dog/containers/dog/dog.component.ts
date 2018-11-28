import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {DogService} from '../../store/services/dog.service';
import {DogDataSource} from './dog.data-source';
import {getItemsData} from '../../store/selectors/dog.selectors';
import {MatPaginator, MatSort} from '@angular/material';
import {FetchDogs} from '../../store/actions/dog.actions';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  dataSource: DogDataSource;
  @Input()
  id: number;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dogService: DogService,private store: Store<any>) { }

  ngOnInit() {
    this.store.select(getItemsData).subscribe((data)=>{
      this.dataSource = new DogDataSource(this.paginator, this.sort);
      this.dataSource.data = data;
      console.log('data',data);
    })
    this.store.dispatch(new FetchDogs());
  }
  buy(id) {
    const item = this.dataSource.data.find(item => item.id === id);
    // this.store.dispatch(new AddToCard(item));
  }
}
