export type TriageDTO = {
  id?: string;
  callNumber: number;
  created_at: Date;
  agencyId: string;
  forwardingId: string;
  attendantId: string;
  customerId: string;
  attendanceTypeIds: string[];
};
