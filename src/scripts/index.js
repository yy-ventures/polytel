import { add_class_on_focus, doms } from './dom_utils'

document.querySelector('#intro img').onload = () => {
  add_class_on_focus({
    ['.moved_right']: 'move_back',
    ['.moved_left']: 'move_back',
    ['.faded_out']: 'fade_in',
  });
}
