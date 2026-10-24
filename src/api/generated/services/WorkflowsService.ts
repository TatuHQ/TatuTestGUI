/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateResponse } from '../models/CreateResponse';
import type { MessageResponse } from '../models/MessageResponse';
import type { Workflow } from '../models/Workflow';
import type { WorkflowUpdateRequest } from '../models/WorkflowUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WorkflowsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * List workflows (retired)
   * Workflows are created inside a project: POST /projects/{id}/workflows. This route is registered only to explain that.
   * @returns void
   * @throws ApiError
   */
  public listWorkflows(): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/workflows',
      errors: {
        400: `\`invalid_request\`: the body was rejected — an unknown or missing field, a field whose type does not match the schema, a \`projectId\` on \`POST /projects\` that is not a single path segment ending in \`.json\`, or a name-only payload that omits what creation needs; or a \`name\` that would need more than the 255 bytes one stored name may hold, refused here rather than failing as a storage error when the project is written.`,
        401: `\`missing_token\`, \`invalid_token\` or \`token_expired\`: the \`Authorization\` header was absent or carried a token this deployment does not accept. The response carries the \`WWW-Authenticate\` challenge.`,
        403: `\`forbidden\`: the caller is authenticated but does not hold the role this operation needs on every project it reaches through. A caller that can reach nothing the operation touches is answered the same way, so the two are not distinguished. The projects a request reaches are resolved and checked before the resource itself is loaded, so this answer can precede the \`404\` a missing resource would draw; a deployment that does not enforce authentication skips the check and answers the ordinary \`404\` instead.`,
      },
    });
  }
  /**
   * Create a workflow (retired)
   * Workflows are created inside a project: POST /projects/{id}/workflows. This route is registered only to explain that.
   * @returns void
   * @throws ApiError
   */
  public createWorkflow(): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/workflows',
      errors: {
        400: `\`invalid_request\`: the body was rejected — an unknown or missing field, a field whose type does not match the schema, a \`projectId\` on \`POST /projects\` that is not a single path segment ending in \`.json\`, or a name-only payload that omits what creation needs; or a \`name\` that would need more than the 255 bytes one stored name may hold, refused here rather than failing as a storage error when the project is written.`,
        401: `\`missing_token\`, \`invalid_token\` or \`token_expired\`: the \`Authorization\` header was absent or carried a token this deployment does not accept. The response carries the \`WWW-Authenticate\` challenge.`,
        403: `\`forbidden\`: the caller is authenticated but does not hold the role this operation needs on every project it reaches through. A caller that can reach nothing the operation touches is answered the same way, so the two are not distinguished. The projects a request reaches are resolved and checked before the resource itself is loaded, so this answer can precede the \`404\` a missing resource would draw; a deployment that does not enforce authentication skips the check and answers the ordinary \`404\` instead.`,
      },
    });
  }
  /**
   * Read a workflow
   * The workflow document, resolved globally. A workflow that several projects hold is a conflict.
   * @returns Workflow The workflow document
   * @throws ApiError
   */
  public getWorkflow({
    id,
  }: {
    id: string,
  }): CancelablePromise<Workflow> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/workflows/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `\`missing_token\`, \`invalid_token\` or \`token_expired\`: the \`Authorization\` header was absent or carried a token this deployment does not accept. The response carries the \`WWW-Authenticate\` challenge.`,
        403: `\`forbidden\`: the caller is authenticated but does not hold the role this operation needs on every project it reaches through. A caller that can reach nothing the operation touches is answered the same way, so the two are not distinguished. The projects a request reaches are resolved and checked before the resource itself is loaded, so this answer can precede the \`404\` a missing resource would draw; a deployment that does not enforce authentication skips the check and answers the ordinary \`404\` instead.`,
        404: `Structured error envelope: \`{"error": {"code": ..., "message": ...}}\``,
        409: `Structured error envelope: \`{"error": {"code": ..., "message": ...}}\``,
        503: `\`service_unavailable\`: the request arrived while \`TATU_MAX_CONCURRENCY\` (default 128; an explicit \`0\` removes the cap) others were already in flight. The server refuses rather than queues, and the answer carries \`Retry-After\`.`,
        504: `\`request_timeout\`: the request outlived \`TATU_REQUEST_TIMEOUT_MS\` (default 300000 ms; an explicit \`0\` disables the deadline) and the server stopped waiting for it. A write already handed to the storage layer finishes atomically regardless of the cutoff, so a \`504\` answers 'unknown', never 'half done'.`,
      },
    });
  }
  /**
   * Update a workflow
   * Partial merge. The caller needs `editor` in the home project.
   * @returns MessageResponse Updated. `document` carries the workflow as stored.
   * @throws ApiError
   */
  public updateWorkflow({
    id,
    requestBody,
    ifMatch,
  }: {
    id: string,
    requestBody: WorkflowUpdateRequest,
    /**
     * Optional optimistic-concurrency precondition: the `ETag` value last read for this document. A `PUT` carrying it is applied only if the stored document still digests to it; otherwise the request is refused `412` — code `conflict` — carrying the CURRENT digest, so the client can re-read in one round trip. Absent or empty, the update follows the legacy last-writer-wins path.
     */
    ifMatch?: string,
  }): CancelablePromise<MessageResponse> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/workflows/{id}',
      path: {
        'id': id,
      },
      headers: {
        'If-Match': ifMatch,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `\`invalid_request\`: the body was rejected — an unknown or missing field, a field whose type does not match the schema, a \`projectId\` on \`POST /projects\` that is not a single path segment ending in \`.json\`, or a name-only payload that omits what creation needs; or a \`name\` that would need more than the 255 bytes one stored name may hold, refused here rather than failing as a storage error when the project is written.`,
        401: `\`missing_token\`, \`invalid_token\` or \`token_expired\`: the \`Authorization\` header was absent or carried a token this deployment does not accept. The response carries the \`WWW-Authenticate\` challenge.`,
        403: `\`forbidden\`: the caller is authenticated but does not hold the role this operation needs on every project it reaches through. A caller that can reach nothing the operation touches is answered the same way, so the two are not distinguished. The projects a request reaches are resolved and checked before the resource itself is loaded, so this answer can precede the \`404\` a missing resource would draw; a deployment that does not enforce authentication skips the check and answers the ordinary \`404\` instead.`,
        404: `Structured error envelope: \`{"error": {"code": ..., "message": ...}}\``,
        412: `The \`If-Match\` digest no longer describes the stored document: it was modified between the read and this update. The response carries the CURRENT digest in \`ETag\` — re-read, re-apply, retry with the new value. The published code is \`conflict\`; the status is \`412\`, distinguishing the precondition failure from a create-time \`409\` clash.`,
        413: `Every request is capped at \`TATU_MAX_BODY_BYTES\` (default 50 MiB) by the router, before the handler runs: the answer is plain text — \`length limit exceeded\` — never the error envelope. Because the router cap and the attachment cap are the same size, the \`payload_too_large\` envelope the API can still produce is unreachable for attachments, and this plain-text 413 is the only observable one.`,
        503: `\`service_unavailable\`: the request arrived while \`TATU_MAX_CONCURRENCY\` (default 128; an explicit \`0\` removes the cap) others were already in flight. The server refuses rather than queues, and the answer carries \`Retry-After\`.`,
        504: `\`request_timeout\`: the request outlived \`TATU_REQUEST_TIMEOUT_MS\` (default 300000 ms; an explicit \`0\` disables the deadline) and the server stopped waiting for it. A write already handed to the storage layer finishes atomically regardless of the cutoff, so a \`504\` answers 'unknown', never 'half done'.`,
      },
    });
  }
  /**
   * Delete a workflow
   * The caller needs `editor` in the home project.
   * @returns MessageResponse Deleted
   * @throws ApiError
   */
  public deleteWorkflow({
    id,
  }: {
    id: string,
  }): CancelablePromise<MessageResponse> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/workflows/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `\`missing_token\`, \`invalid_token\` or \`token_expired\`: the \`Authorization\` header was absent or carried a token this deployment does not accept. The response carries the \`WWW-Authenticate\` challenge.`,
        403: `\`forbidden\`: the caller is authenticated but does not hold the role this operation needs on every project it reaches through. A caller that can reach nothing the operation touches is answered the same way, so the two are not distinguished. The projects a request reaches are resolved and checked before the resource itself is loaded, so this answer can precede the \`404\` a missing resource would draw; a deployment that does not enforce authentication skips the check and answers the ordinary \`404\` instead.`,
        404: `Structured error envelope: \`{"error": {"code": ..., "message": ...}}\``,
        503: `\`service_unavailable\`: the request arrived while \`TATU_MAX_CONCURRENCY\` (default 128; an explicit \`0\` removes the cap) others were already in flight. The server refuses rather than queues, and the answer carries \`Retry-After\`.`,
        504: `\`request_timeout\`: the request outlived \`TATU_REQUEST_TIMEOUT_MS\` (default 300000 ms; an explicit \`0\` disables the deadline) and the server stopped waiting for it. A write already handed to the storage layer finishes atomically regardless of the cutoff, so a \`504\` answers 'unknown', never 'half done'.`,
      },
    });
  }
  /**
   * Duplicate a workflow
   * Creates a copy of the workflow. The copy is refused if any step target is not reachable in the destination project.
   * @returns CreateResponse Workflow duplicated
   * @throws ApiError
   */
  public duplicateWorkflow({
    id,
    requestBody,
  }: {
    id: string,
    requestBody?: {
      /**
       * Identifier for the copy; derived from the source when omitted.
       */
      newId?: string;
    },
  }): CancelablePromise<CreateResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/workflows/{id}/duplicate',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `\`invalid_request\`: the body was rejected — an unknown or missing field, a field whose type does not match the schema, a \`projectId\` on \`POST /projects\` that is not a single path segment ending in \`.json\`, or a name-only payload that omits what creation needs; or a \`name\` that would need more than the 255 bytes one stored name may hold, refused here rather than failing as a storage error when the project is written.`,
        401: `\`missing_token\`, \`invalid_token\` or \`token_expired\`: the \`Authorization\` header was absent or carried a token this deployment does not accept. The response carries the \`WWW-Authenticate\` challenge.`,
        403: `\`forbidden\`: the caller is authenticated but does not hold the role this operation needs on every project it reaches through. A caller that can reach nothing the operation touches is answered the same way, so the two are not distinguished. The projects a request reaches are resolved and checked before the resource itself is loaded, so this answer can precede the \`404\` a missing resource would draw; a deployment that does not enforce authentication skips the check and answers the ordinary \`404\` instead.`,
        404: `Structured error envelope: \`{"error": {"code": ..., "message": ...}}\``,
        409: `Structured error envelope: \`{"error": {"code": ..., "message": ...}}\``,
        413: `Every request is capped at \`TATU_MAX_BODY_BYTES\` (default 50 MiB) by the router, before the handler runs: the answer is plain text — \`length limit exceeded\` — never the error envelope. Because the router cap and the attachment cap are the same size, the \`payload_too_large\` envelope the API can still produce is unreachable for attachments, and this plain-text 413 is the only observable one.`,
        503: `\`service_unavailable\`: the request arrived while \`TATU_MAX_CONCURRENCY\` (default 128; an explicit \`0\` removes the cap) others were already in flight. The server refuses rather than queues, and the answer carries \`Retry-After\`.`,
        504: `\`request_timeout\`: the request outlived \`TATU_REQUEST_TIMEOUT_MS\` (default 300000 ms; an explicit \`0\` disables the deadline) and the server stopped waiting for it. A write already handed to the storage layer finishes atomically regardless of the cutoff, so a \`504\` answers 'unknown', never 'half done'.`,
      },
    });
  }
}
