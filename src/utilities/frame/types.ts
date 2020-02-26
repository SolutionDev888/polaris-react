import React from 'react';
import {Action} from '../../types';

interface ContextualSaveBarAction {
  /** A destination to link to */
  url?: string;
  /** Content the action displays */
  content?: string;
  /** Should a spinner be displayed */
  loading?: boolean;
  /** Should the action be disabled */
  disabled?: boolean;
  /** Callback when an action takes place */
  onAction?(): void;
}

interface ContextualSaveBarDiscardActionProps {
  /** Whether to show a modal confirming the discard action */
  discardConfirmationModal?: boolean;
}

interface ContextualSaveBarSecondaryActionProps
  extends ContextualSaveBarAction {
  content: string;
}

type ContextualSaveBarCombinedActionProps = ContextualSaveBarDiscardActionProps &
  ContextualSaveBarAction;

export interface ContextualSaveBarProps {
  /** Extend the contents section to be flush with the left edge  */
  alignContentFlush?: boolean;
  /** Accepts a string of content that will be rendered to the left of the actions */
  message?: string;
  /** Accepts arbitrary content that will be rendered to the left of the actions */
  content?: string | React.ReactNode;
  /** Save or commit contextual save bar action with text defaulting to 'Save' */
  saveAction?: ContextualSaveBarAction;
  /** Discard or cancel contextual save bar action with text defaulting to 'Discard' */
  discardAction?: ContextualSaveBarCombinedActionProps;
  /** Secondary contextual save bar action */
  secondaryAction?: ContextualSaveBarSecondaryActionProps;
}

// Toast

export interface ToastProps {
  /** The content that should appear in the toast message */
  content: string;
  /**
   * The length of time in milliseconds the toast message should persist
   * @default 5000
   */
  duration?: number;
  /** Display an error toast. */
  error?: boolean;
  /** Callback when the dismiss icon is clicked */
  onDismiss(): void;
  /** Adds an action next to the message (stand-alone app use only) */
  action?: Action;
}

export interface ToastID {
  id: string;
}

export type ToastPropsWithID = ToastProps & ToastID;
