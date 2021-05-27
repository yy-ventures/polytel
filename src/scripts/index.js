import { add_class_on_focus, toggle_navigation_on_scroll } from './dom_utils'

// add_class_on_focus({
//   ['.moved_right']: 'move_back',
//   ['.moved_left']: 'move_back',
//   ['.faded_out']: 'fade_in',
// });

toggle_navigation_on_scroll()

document.querySelector('#intro img').onload = () => {
  add_class_on_focus({
    ['.moved_right']: 'move_back',
    ['.moved_left']: 'move_back',
    ['.faded_out']: 'fade_in',
  });
}
