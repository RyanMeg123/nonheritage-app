export type OrderRecord = {
  id: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  artisanId: string;
  submissionId: string;
  designConfirmationId: string;
  status: string;
  totalPriceFen: number;
  agreedDeliveryDate: string;
  notes: string | null;
};

export type CreateOrderPayload = {
  userId: string;
  artisanId: string;
  designConfirmationId: string;
  totalPriceFen: number;
  agreedDeliveryDate: string;
  notes?: string;
};

export type OrderEntryContext = {
  artisanName?: string;
  craftLabel?: string;
  planSummary?: string;
};
