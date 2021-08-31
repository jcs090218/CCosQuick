# CQ_Button

Base button for easier implementation.

## Functions

| Name | Description |
|:---|:---|
| onclick | Callback for this button when is clicked. |

## Exampls

```js
export default class Example extends CQ_Button {
    // Override the callback function.
    public onclick() : void {
        cc.log('Button clicked!');
    }
}
```
