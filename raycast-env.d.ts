/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `play` command */
  export type Play = ExtensionPreferences & {}
  /** Preferences accessible in the `pause` command */
  export type Pause = ExtensionPreferences & {}
  /** Preferences accessible in the `playpause` command */
  export type Playpause = ExtensionPreferences & {}
  /** Preferences accessible in the `next` command */
  export type Next = ExtensionPreferences & {}
  /** Preferences accessible in the `previous` command */
  export type Previous = ExtensionPreferences & {}
  /** Preferences accessible in the `toggle-autoplay` command */
  export type ToggleAutoplay = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `play` command */
  export type Play = {}
  /** Arguments passed to the `pause` command */
  export type Pause = {}
  /** Arguments passed to the `playpause` command */
  export type Playpause = {}
  /** Arguments passed to the `next` command */
  export type Next = {}
  /** Arguments passed to the `previous` command */
  export type Previous = {}
  /** Arguments passed to the `toggle-autoplay` command */
  export type ToggleAutoplay = {}
}

