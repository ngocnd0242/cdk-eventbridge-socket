import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { EventBridgeWebSocket } from "./eventbridge-sockets/eventbridge-sockets-contruct";


export class ApiEventbridgeStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
      new EventBridgeWebSocket(this, 'web-sockets', {
          bus: 'test',
          eventPattern: {
              account: ['your_account_id'],
          },
          stage: 'dev',
      })
  }
}

