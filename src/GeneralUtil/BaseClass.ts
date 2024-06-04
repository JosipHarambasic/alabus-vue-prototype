// BaseClass.ts
export default class BaseClass {
    sharedProperty: string;
  
    constructor() {
      this.sharedProperty = 'Shared Property Value';
    }
  
    sharedMethod(): string {
      return `This is a shared method. Property: ${this.sharedProperty}`;
    }
  }
  