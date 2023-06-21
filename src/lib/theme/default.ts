import { ALERT_THEME } from '../components/atoms/Alert/Alert.theme';
import { AVATAR_THEME } from '../components/atoms/Avatar/Avatar.theme';
import { BADGE_THEME } from '../components/atoms/Badge/Badge.theme';
import { BREADCRUMB_THEME } from '../components/atoms/Breadcrumb/Breadcrumb.theme';
import { BUTTON_THEME } from '../components/atoms/Button/Button.theme';
import { MAIN_CONTAINER_THEME } from '../components/atoms/MainContainer/MainContainer.theme';
import { PROGRESS_THEME } from '../components/atoms/Progress/Progress.theme';
import { PROGRESS_BAR_THEME } from '../components/atoms/ProgressBar/ProgressBar.theme';
import { RATING_THEME } from '../components/atoms/Rating/Rating.theme';
import { SPINNER_THEME } from '../components/atoms/Spinner/Spinner.theme';
import { TOAST_THEME } from '../components/atoms/Toast/Toast.theme';
import { TOOLTIP_THEME } from '../components/atoms/Tooltip/Tooltip.theme';
import type { HelloInternetTheme } from '../components/bosons';
import { ACCORDION_THEME } from '../components/molecules/Accordion/Accordion.theme';
import { BUTTON_GROUP_THEME } from '../components/molecules/ButtonGroup/ButtonGroup.theme';
import { CAMERA_ROLL_THEME } from '../components/molecules/CameraRoll/CameraRoll.theme';
import { CARD_THEME } from '../components/molecules/Card/Card.theme';
import { DROPDOWN_THEME } from '../components/molecules/Dropdown/Dropdown.theme';
import { HERO_THEME } from '../components/molecules/Hero/Hero.theme';
import { LIST_GROUP_THEME } from '../components/molecules/ListGroup/ListGroup.theme';
import { MODAL_THEME } from '../components/molecules/Modal/Modal.theme';
import { PAGINATION_THEME } from '../components/molecules/Pagination/Pagination.theme';
import { PRESENTATIONAL_THEME } from '../components/molecules/Presentational/Presentational.theme';
import { PRICING_THEME } from '../components/molecules/Pricing/Pricing.theme';
import { TABS_THEME } from '../components/molecules/Tab/Tabs.theme';
import { CAROUSEL_THEME } from '../components/organisms/Carousel/Carousel.theme';
import { FOOTER_THEME } from '../components/organisms/Footer/Footer.theme';
import { FORM_CONTROLS_THEME } from '../components/organisms/FormControls/FormControls.theme';
import { NAV_BAR_THEME } from '../components/organisms/Navbar/Navbar.theme';
import { SIDEBAR_THEME } from '../components/organisms/Sidebar/Sidebar.theme';

const theme: HelloInternetTheme = {
  accordion: ACCORDION_THEME,
  alert: ALERT_THEME,
  avatar: AVATAR_THEME,
  badge: BADGE_THEME,
  breadcrumb: BREADCRUMB_THEME,
  button: BUTTON_THEME,
  buttonGroup: BUTTON_GROUP_THEME,
  cameraRoll: CAMERA_ROLL_THEME,
  card: CARD_THEME,
  carousel: CAROUSEL_THEME,
  dropdown: DROPDOWN_THEME,
  footer: FOOTER_THEME,
  formControls: FORM_CONTROLS_THEME,
  hero: HERO_THEME,
  listGroup: LIST_GROUP_THEME,
  modal: MODAL_THEME,
  navbar: NAV_BAR_THEME,
  rating: RATING_THEME,
  pagination: PAGINATION_THEME,
  pricing: PRICING_THEME,
  progressBar: PROGRESS_BAR_THEME,
  sidebar: SIDEBAR_THEME,
  progress: PROGRESS_THEME,
  presentational: PRESENTATIONAL_THEME,
  mainContainer: MAIN_CONTAINER_THEME,
  spinner: SPINNER_THEME,
  tab: TABS_THEME,
  toast: TOAST_THEME,
  tooltip: TOOLTIP_THEME
};

export default theme;
