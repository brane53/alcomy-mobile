export class Task {
  id: string;
  description: string;
  isComplete: boolean;
  time?: string;

  constructor(description: string, isComplete: boolean = false) {
    this.description = description;
    this.isComplete = isComplete;
    
  }
}