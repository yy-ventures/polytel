// dom{{{
//==============================================================================
//                              Select Dom
//==============================================================================
export const doms = (selector) => document.querySelectorAll(selector);
/*}}}*/
// observer dom{{{
//==============================================================================
//                              Observer Dom
//==============================================================================
export const observer_dom = (
  dom,
  action_is_intersecting,
  action_not_intersecting
) => {
  const io = new IntersectionObserver((entries, io) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        action_is_intersecting(entry.target);
        if (!action_not_intersecting) io.disconnect();
      } else if (action_not_intersecting) {
        action_not_intersecting(entry.target);
      }
    });
  });
  io.observe(dom);
};
/*}}}*/
// toggle navigation on_scroll{{{
//==============================================================================
//                       Toggle Navigation on Scroll
//==============================================================================
export const toggle_navigation_on_scroll = () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > window.position_old) {
      if (!window.nav_hidden) {
        doms('nav')[0].style.transform = 'translateY(-100%)';
        window.nav_hidden = true;
      }
    } else if (window.nav_hidden) {
      doms('nav')[0].style.transform = 'translateY(0)';
      window.nav_hidden = false;
    }
    window.position_old = window.scrollY;
  });
};
/*}}}*/
// add class on focus{{{
//==============================================================================
//                              Add Class on Focus
//==============================================================================
export const add_class_on_focus = (list) => {
  for (const key in list) {
    doms(key).forEach((d) => {
      observer_dom(d, (dom) => dom.classList.add(list[key]));
    });
  }
}; //
/*}}}*/
// toggle class on focus{{{
//==============================================================================
//                              Toggle Class on Focus
//==============================================================================
export const toggle_class_on_focus = (list) => {
  for (const key in list) {
    doms(key).forEach((d) => {
      observer_dom(
        d,
        (dom) => dom.classList.add(list[key]),
        (dom) => dom.classList.remove(list[key])
      );
    });
  }
}; //
/*}}}*/
// update scroll{{{
//==============================================================================
//                              Update Scroll
//==============================================================================
export const update_scroll = () => {
  window.addEventListener('scroll', () => {
    document.body.style.setProperty(
      '--scroll',
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  });
};
/*}}}*/
// click listener{{{
//==============================================================================
//                              Click Listener
//==============================================================================
export const click_listener = (dom_string, action) => {
  doms(dom_string).forEach((dom) => {
    dom.addEventListener('click', action);
  });
};
//}}}
// run function on focus{{{
//==============================================================================
//                              Run Function on Focus
//==============================================================================
export const run_function_on_focus = (list, action) => {
  for (const key in list) {
    doms(key).forEach((d) => {
      observer_dom(d, action);
    });
  }
}; //
/*}}}*/
// typewriter{{{
//==============================================================================
//                              Typewriter
//==============================================================================
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export const typewriter = (strings, speed, delay) => async (dom) => {
  let single_string = false;
  if (strings.length === 0) {
    strings = [dom.textContent];
    single_string = true;
  }
  while (true) {
    for (let i = 0; i < strings.length; ++i) {
      // dom.textContent = '';
      await sleep(delay);
      for (let j = 0; j < strings[i].length; ++j) {
        // dom.textContent += strings[i].charAt(j);
        dom.textContent = strings[i].substring(0, j + 1);
        await sleep(speed);
      }
      await sleep(delay);
    }
    if (single_string) break;
  }
};
//}}}
