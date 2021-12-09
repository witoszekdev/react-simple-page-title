import { useEffect, useRef } from "react";

export type PageTitle = string | undefined | null;

/** Change page title dynamically by passing a value to the hook
 *
 * When no value is provided the hook will change the page title to the initial value.
 * When hook is unmounted the page title will be reset to the initial value.
 *
 */
export const usePageTitle = (title: PageTitle) => {
  const initialTitle = useRef(document.title);

  useEffect(() => {
    // make a copy so that is available when component is unmounted
    const initialPageTitle = initialTitle.current;

    if (title) {
      document.title = title;
    } else {
      document.title = initialPageTitle;
    }

    return () => {
      if (initialPageTitle) {
        document.title = initialPageTitle;
      }
    };
  }, [title]);
};
