import { usePageTitle } from "./usePageTitle";

export interface IPageTitleProps {
  title: string | null;
}

/** Component for declaratively changing the document's title
 *
 * Pass title to the component in order to change title displayed in the browser's toolbar.
 *
 * If multiple components are rendered on the same page, the title of the last component to be rendered will be displayed.
 */
export function PageTitle({ title }: IPageTitleProps) {
  usePageTitle(title);

  return null;
}
