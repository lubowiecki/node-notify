# node-notify

Simple wrapper around [chalk](https://www.npmjs.com/package/chalk)

## Usage

```javascript
import {Notify} from '@lubowiecki/node-notify';

Notify.success({message: 'message'});
Notify.warning({message: 'message'});
Notify.info({message: 'message'});
Notify.error({message: 'message', error: new Error('Some error')});
```

![result](assets/images/result.png)
