# CQ_Input

Input handle.

## Variables

| Name | Description |
|:---|:---|
| mousePosition | Position of the mouse on the screen. |

## Functions

| Name | Description |
|:---|:---|
| cleanInputBuffer | Clean the input buffer every frame. Remember to call this in order to get the correct output for the event loop. |
| getMouseButtonUp | Check if a mouse button click is up this frame. |
| getMouseButtonDown | Check if a mouse button click in this frame. |
| getKeyUp | Check if the key is up this frame. |
| getKeyDown | Check if the key is down this frame. |
| getKey | Check if the key is held at the moment. |

## Examples

Example.ts

```ts
class Example {
    protected update(dt : number) : void {
        let mousePos : cc.Vec2 = CQ_Input.mousePosition;
        cc.log('Mouse Position: %s - %s', mousePos.x, mousePos.y);
    
        if (CQ_Input.getKeyDown(CQ_KeyCode.A)) {
            cc.log('A key is down!');
        }
    }
}
```
