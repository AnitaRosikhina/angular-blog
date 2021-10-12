import { Injectable } from '@angular/core';
import {IBlog, IUser} from "./data.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  blogs: IBlog[] = []
  users: IUser[] = []

  constructor() { }
}
