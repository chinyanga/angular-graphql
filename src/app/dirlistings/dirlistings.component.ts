import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_DIRECTORYLISTING } from '../graphql/graphql.quiries';

@Component({
  selector: 'app-dirlistings',
  templateUrl: './dirlistings.component.html',
  styleUrls: ['./dirlistings.component.css']
})
export class DirlistingsComponent implements OnInit {

  listings:any =[];
  loading:any= false;
  error:any;
  directory:String='';

  constructor(private apollo:Apollo) { }

  ngOnInit(): void {

  }

  fetchDirListings(dir?:String){
    this.listings = [];
    if(!dir){
      dir = this.directory;
    }else{
      this.directory = dir;
    }
    console.log(this.directory);
    this.loading = true;
    this.apollo.watchQuery({query:GET_DIRECTORYLISTING(dir)})
    .valueChanges.subscribe((result:any)=>{
      this.listings = result?.data?.getAllListings;
      this.loading = false;
      this.error = result.error;
    });
  }

  showListings(dir?:String){
    if(this.directory || dir){
      console.log('Clicked '+ this.directory);
      this.fetchDirListings(dir);
    }else{
      this.listings = [];
    }
  }

}
