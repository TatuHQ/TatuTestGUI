/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkflowStep } from './WorkflowStep';
/**
 * A partial workflow update.
 */
export type WorkflowUpdateRequest = {
  /**
   * Optional. A value that restates the addressed identifier or the stored one is accepted.
   */
  workflowId?: string;
  name?: string;
  description?: string;
  steps?: Array<WorkflowStep>;
  tags?: Array<string>;
};

