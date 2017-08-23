export class Trigger {
  event: TriggerEvent;
  actions: TriggerAction[];
  conditions: TriggerCondition[];
}

class TriggerEvent {
  type: string;

}

class TriggerAction {

}

class TriggerCondition {

}

class TaskTrigger extends Trigger {

  onComplete() {

  }

  onOverDue() {
    
  }
}
