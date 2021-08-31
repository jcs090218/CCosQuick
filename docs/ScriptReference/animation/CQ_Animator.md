# CQ_Animator

Handle multiple animations (CQ_Animation) object for controlling the 
flow/display from each animations that have been manage by this class.

## Variables

| Name | Description |
|:---|:---|
| animations | List of animation that this animator controls. |
| currentAnimation | Current animation that are being displayed. |

## Functions

| Name | Description |
|:---|:---|
| playAnimation | Play the animation by index in the array. |
| playOneShot | Play one animation but does not loop. |
| stopAnimation | Stop the animation at point/moment and reset the frame the first frame of the animation. |
| pauseAnimation | Pause the animation at point/moment. |
| unPauseAnimation | Unpause the animation at point/moment. |

