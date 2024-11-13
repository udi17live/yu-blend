export default interface NavItem {
  name: string;
  href: string;
  current: boolean;
  dropdown?: NavItem[];
}
