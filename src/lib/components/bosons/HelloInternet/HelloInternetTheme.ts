import type { DeepPartial } from '../..';
import type { AlertTheme } from '../../atoms/Alert/Alert.theme';
import type { AvatarTheme } from '../../atoms/Avatar/Avatar.theme';
import type { BadgeTheme } from '../../atoms/Badge/Badge.theme';
import type { BreadcrumbTheme } from '../../atoms/Breadcrumb/Breadcrumb.theme';
import type { ButtonTheme } from '../../atoms/Button/Button.theme';
import type { MainContainerTheme } from '../../atoms/MainContainer/MainContainer.theme';
import type { ProgressTheme } from '../../atoms/Progress/Progress.theme';
import type { ProgressBarTheme } from '../../atoms/ProgressBar/ProgressBar.theme';
import type { RatingTheme } from '../../atoms/Rating/Rating.theme';
import type { SpinnerTheme } from '../../atoms/Spinner/Spinner.theme';
import type { TagTheme } from '../../atoms/Tag/Tag.theme';
import type { ToastTheme } from '../../atoms/Toast/Toast.theme';
import type { TooltipTheme } from '../../atoms/Tooltip/Tooltip.theme';
import type { AccordionTheme } from '../../molecules/Accordion/Accordion.theme';
import type { BlogPostTheme } from '../../molecules/BlogPost/BlogPost.theme';
import type { ButtonGroupTheme } from '../../molecules/ButtonGroup/ButtonGroup.theme';
import type { CameraRollTheme } from '../../molecules/CameraRoll/CameraRoll.theme';
import type { CardTheme } from '../../molecules/Card/Card.theme';
import type { DropdownTheme } from '../../molecules/Dropdown/Dropdown.theme';
import type { HeroTheme } from '../../molecules/Hero/Hero.theme';
import type { ListGroupTheme } from '../../molecules/ListGroup/ListGroup.theme';
import type { ModalTheme } from '../../molecules/Modal/Modal.theme';
import type { PaginationTheme } from '../../molecules/Pagination/Pagination.theme';
import type { PresentationTheme } from '../../molecules/Presentational/Presentational.theme';
import type { TabsTheme } from '../../molecules/Tab/Tabs.theme';
import type { CarouselTheme } from '../../organisms/Carousel/Carousel.theme';
import type { FooterTheme } from '../../organisms/Footer/Footer.theme';
import type { FormControlsTheme } from '../../organisms/FormControls/FormControls.theme';
import type { NavBarTheme } from '../../organisms/Navbar/Navbar.theme';
import type { PostAuthorTheme } from '../../organisms/PostAuthor/PostAuthor.theme';
import type { SidebarTheme } from '../../organisms/Sidebar/Sidebar.theme';

export type CustomHelloInternetTheme = DeepPartial<HelloInternetTheme>;

export interface HelloInternetTheme extends Record<string, unknown> {
  accordion: AccordionTheme;
  alert: AlertTheme;
  avatar: AvatarTheme;
  badge: BadgeTheme;
  blogPost: BlogPostTheme;
  breadcrumb: BreadcrumbTheme;
  button: ButtonTheme;
  buttonGroup: ButtonGroupTheme;
  cameraRoll: CameraRollTheme;
  card: CardTheme;
  carousel: CarouselTheme;
  dropdown: DropdownTheme;
  footer: FooterTheme;
  formControls: FormControlsTheme;
  hero: HeroTheme;
  listGroup: ListGroupTheme;
  modal: ModalTheme;
  navbar: NavBarTheme;
  rating: RatingTheme;
  pagination: PaginationTheme;
  postAuthor: PostAuthorTheme;
  presentational: PresentationTheme;
  progressBar: ProgressBarTheme;
  sidebar: SidebarTheme;
  progress: ProgressTheme;
  mainContainer: MainContainerTheme;
  spinner: SpinnerTheme;
  tab: TabsTheme;
  tag: TagTheme;
  toast: ToastTheme;
  tooltip: TooltipTheme;
}

export interface FlowbiteBoolean {
  off: string;
  on: string;
}

export interface HIStateColors {
  info: string;
  failure: string;
  success: string;
  warning: string;
}

export interface HIThemeColors {
  primary: string;
  secondary: string;
  tertiary: string;
}

export interface HIColors extends HIStateColors, HIThemeColors {
  [key: string]: string;
  blue: string;
  cyan: string;
  dark: string;
  gray: string;
  green: string;
  indigo: string;
  light: string;
  lime: string;
  orange: string;
  pink: string;
  purple: string;
  red: string;
  teal: string;
  yellow: string;
}

export type HIHeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HIPositions {
  'bottom-left': string;
  'bottom-right': string;
  'bottom-center': string;
  'top-left': string;
  'top-center': string;
  'top-right': string;
  'center-left': string;
  center: string;
  'center-right': string;
}

export interface HISizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
  '6xl': string;
  '7xl': string;
}

export interface HIButtonWidth extends HISizes {
  compact: string;
  full: string;
}
