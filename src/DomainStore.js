import {observable,action} from 'mobx';
import uuid from "uuid";
import Helpers from './stores/helpers.store';

class DomainStore{
  // Import external stores
  constructor() {
    this.helpers = Helpers;
  }
}
export default new DomainStore();