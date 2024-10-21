import { ThunkedState } from "@models/ThunkedState";
import { ContentRecord } from "@pbmodels/*";

export interface ContentRecordState extends ThunkedState, ContentRecord {}
