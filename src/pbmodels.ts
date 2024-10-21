/**
 * This file was @generated using pocketbase-typegen
 */

import type PocketBase from "pocketbase";
import type { RecordService } from "pocketbase";

export enum Collections {
  Category = "category",
  Content = "content",
  Menu = "menu",
  MenuItem = "menuItem",
  Navigation = "navigation",
  Profile = "profile",
  Social = "social",
  Theme = "theme",
  Users = "users",
  VodkaItem = "vodkaItem",
  WineItem = "wineItem",
}

// Alias types for improved usability
export type IsoDateString = string;
export type RecordIdString = string;
export type HTMLString = string;

// System fields
export type BaseSystemFields<T = never> = {
  id: RecordIdString;
  created: IsoDateString;
  updated: IsoDateString;
  collectionId: string;
  collectionName: Collections;
  expand?: T;
};

export type AuthSystemFields<T = never> = {
  email: string;
  emailVisibility: boolean;
  username: string;
  verified: boolean;
} & BaseSystemFields<T>;

// Record types for each collection

export type CategoryRecord = {
  menu_id?: RecordIdString[];
  name?: string;
};

export type ContentRecord = {
  content?: HTMLString;
  page_name: string;
  profile_id: RecordIdString;
};

export type MenuRecord = {
  desc?: string;
  name?: string;
  profile_id?: RecordIdString;
};

export type MenuItemRecord = {
  category_id?: RecordIdString[];
  desc?: string;
  is_gluten_free?: boolean;
  is_raw?: boolean;
  is_vagan?: boolean;
  name: string;
  price: number;
};

export type NavigationRecord<Tdata = unknown> = {
  data?: null | Tdata;
  profile?: RecordIdString;
};

export type ProfileRecord<Thours = unknown> = {
  address?: string;
  appName: string;
  city?: string;
  email?: string;
  fav_icon?: string;
  hours?: null | Thours;
  lat?: number;
  lng?: number;
  openTable?: string;
  phone?: string;
  state?: string;
  zip?: string;
};

export type SocialRecord = {
  facebook?: string;
  instagram?: string;
  opentable?: string;
  profile?: RecordIdString;
  twitter?: string;
  yelp?: string;
};

export type ThemeRecord = {
  dark?: string;
  darkBorder?: string;
  footerLogo?: string;
  light?: string;
  lightBorder?: string;
  logo?: string;
  primary?: string;
  profile?: RecordIdString;
  secondary?: string;
};

export type UsersRecord = {
  avatar?: string;
  name?: string;
};

export type VodkaItemRecord = {
  category_id?: RecordIdString;
  country?: string;
  name?: string;
  price_carafe?: number;
  price_shot?: number;
};

export enum WineItemTypeOptions {
  "red" = "red",
  "white" = "white",
  "sparkling" = "sparkling",
  "rose" = "rose",
  "champagne" = "champagne",
}
export type WineItemRecord = {
  category_id?: RecordIdString[];
  country: string;
  name: string;
  price_bottle?: number;
  price_glass?: number;
  type: WineItemTypeOptions;
};

// Response types include system fields and match responses from the PocketBase API
export type CategoryResponse<Texpand = unknown> = Required<CategoryRecord> &
  BaseSystemFields<Texpand>;
export type ContentResponse<Texpand = unknown> = Required<ContentRecord> &
  BaseSystemFields<Texpand>;
export type MenuResponse<Texpand = unknown> = Required<MenuRecord> &
  BaseSystemFields<Texpand>;
export type MenuItemResponse<Texpand = unknown> = Required<MenuItemRecord> &
  BaseSystemFields<Texpand>;
export type NavigationResponse<Tdata = unknown, Texpand = unknown> = Required<
  NavigationRecord<Tdata>
> &
  BaseSystemFields<Texpand>;
export type ProfileResponse<Thours = unknown, Texpand = unknown> = Required<
  ProfileRecord<Thours>
> &
  BaseSystemFields<Texpand>;
export type SocialResponse<Texpand = unknown> = Required<SocialRecord> &
  BaseSystemFields<Texpand>;
export type ThemeResponse<Texpand = unknown> = Required<ThemeRecord> &
  BaseSystemFields<Texpand>;
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> &
  AuthSystemFields<Texpand>;
export type VodkaItemResponse<Texpand = unknown> = Required<VodkaItemRecord> &
  BaseSystemFields<Texpand>;
export type WineItemResponse<Texpand = unknown> = Required<WineItemRecord> &
  BaseSystemFields<Texpand>;

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
  category: CategoryRecord;
  content: ContentRecord;
  menu: MenuRecord;
  menuItem: MenuItemRecord;
  navigation: NavigationRecord;
  profile: ProfileRecord;
  social: SocialRecord;
  theme: ThemeRecord;
  users: UsersRecord;
  vodkaItem: VodkaItemRecord;
  wineItem: WineItemRecord;
};

export type CollectionResponses = {
  category: CategoryResponse;
  content: ContentResponse;
  menu: MenuResponse;
  menuItem: MenuItemResponse;
  navigation: NavigationResponse;
  profile: ProfileResponse;
  social: SocialResponse;
  theme: ThemeResponse;
  users: UsersResponse;
  vodkaItem: VodkaItemResponse;
  wineItem: WineItemResponse;
};

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
  collection(idOrName: "category"): RecordService<CategoryResponse>;
  collection(idOrName: "content"): RecordService<ContentResponse>;
  collection(idOrName: "menu"): RecordService<MenuResponse>;
  collection(idOrName: "menuItem"): RecordService<MenuItemResponse>;
  collection(idOrName: "navigation"): RecordService<NavigationResponse>;
  collection(idOrName: "profile"): RecordService<ProfileResponse>;
  collection(idOrName: "social"): RecordService<SocialResponse>;
  collection(idOrName: "theme"): RecordService<ThemeResponse>;
  collection(idOrName: "users"): RecordService<UsersResponse>;
  collection(idOrName: "vodkaItem"): RecordService<VodkaItemResponse>;
  collection(idOrName: "wineItem"): RecordService<WineItemResponse>;
};
