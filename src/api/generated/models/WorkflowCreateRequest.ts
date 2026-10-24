/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkflowStep } from './WorkflowStep';
/**
 * A workflow to create. `name` is required; `workflowId` is derived from it.
 */
export type WorkflowCreateRequest = {
  /**
   * Optional; derived from `name` as `<name>.json` when omitted.
   */
  workflowId?: string;
  name: string;
  description?: string;
  /**
   * At least one step is required; at most 512.
   */
  steps: Array<WorkflowStep>;
  tags?: Array<string>;
};

