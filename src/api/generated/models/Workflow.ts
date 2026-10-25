/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkflowStep } from './WorkflowStep';
/**
 * A workflow definition: an ordered list of references to live cases and suites.
 */
export type Workflow = {
  workflowId: string;
  name: string;
  description?: string;
  steps: Array<WorkflowStep>;
  tags?: Array<string>;
};

