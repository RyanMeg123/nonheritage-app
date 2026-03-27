export type AppScreen =
  | 'auth'
  | 'home'
  | 'publish'
  | 'chat'
  | 'profile'
  | 'artisan-onboarding'
  | 'craft-plan'
  | 'structured-result'
  | 'preview'
  | 'match'
  | 'design-confirm'
  | 'conversation'
  | 'order-progress';

export type MainTabId = 'home' | 'custom' | 'chat' | 'mine';

export type HomeProcessStep = {
  id: string;
  index: string;
  title: string;
  description: string;
};

export type FeaturedCraft = {
  id: string;
  name: string;
  description: string;
};

export type FeaturedCase = {
  id: string;
  title: string;
  craft: string;
  summary: string;
};

export type HomeData = {
  brandName: string;
  brandTagline: string;
  archiveLabel: string;
  heroEyebrow: string;
  heroTitle: string;
  heroFootnote: string;
  heroSummaryTitle: string;
  heroSummaryText: string;
  startLabel: string;
  artisanCount: number;
  artisanLabel: string;
  processSteps: HomeProcessStep[];
  featuredCrafts: FeaturedCraft[];
  featuredCases: FeaturedCase[];
  bottomTabs: Array<{
    id: string;
    label: string;
    active?: boolean;
  }>;
};

export type UploadImagePlaceholder = {
  id: string;
  uri: string;
};

export type CraftOption = {
  id: string;
  label: string;
};

export type BudgetOption = {
  id: string;
  label: string;
  value: string;
};

export type TimelineOption = {
  id: string;
  label: string;
  value: string;
};

export type PublishEntryMode = 'reference-image' | 'idea-only' | 'find-artisan';

export type PublishPreset = {
  progressLabel: string;
  headerTitle: string;
  headerSubtitle: string;
  uploadGuideLabel: string;
  uploadGuideTitle: string;
  uploadGuideDescription: string;
  requirementHintTitle: string;
  requirementHintSubtitle: string;
  requirementPlaceholder: string;
  craftOptions: CraftOption[];
  budgetOptions: BudgetOption[];
  timelineOptions: TimelineOption[];
  initialUploadedImages: UploadImagePlaceholder[];
  initialRequirementText: string;
  defaultCraftId: string;
  defaultBudgetId: string;
  defaultTimelineId: string;
};

export type PublishFormState = {
  entryMode: PublishEntryMode;
  uploadedImages: UploadImagePlaceholder[];
  requirementText: string;
  preferredCraftId: string;
  budgetId: string;
  timelineId: string;
};

export type PlanReason = {
  id: string;
  index: number;
  title: string;
  description: string;
};

export type CraftPlanData = {
  headerTitle: string;
  headerSubtitle: string;
  badgeLabel: string;
  craftLabel: string;
  supportLabel: string;
  title: string;
  summary: string;
  durationLabel: string;
  durationValue: string;
  priceLabel: string;
  priceValue: string;
  reasonsTitle: string;
  reasons: PlanReason[];
  riskTitle: string;
  risks: string[];
  ctaLabel: string;
  footerNote: string;
};

export type InfoPair = {
  id: string;
  label: string;
  value: string;
};

export type ActionCard = {
  id: string;
  title: string;
  description: string;
};

export type ArtisanMatch = {
  id: string;
  name: string;
  role: string;
  highlight: string;
  note: string;
};

export type StructuredResultData = {
  headerTitle: string;
  headerSubtitle: string;
  badgeLabel: string;
  summary: string;
  summaryNote: string;
  keyInfoTitle: string;
  keyInfo: InfoPair[];
  focusTitle: string;
  focusItems: string[];
  confirmTitle: string;
  confirmText: string;
  ctaLabel: string;
  footerNote: string;
};

export type PreviewScreenData = {
  headerTitle: string;
  headerSubtitle: string;
  badgeLabel: string;
  heroTitle: string;
  heroNote: string;
  noticeTitle: string;
  noticeText: string;
  actions: ActionCard[];
  ctaLabel: string;
  footerNote: string;
};

export type MatchScreenData = {
  headerTitle: string;
  headerSubtitle: string;
  badgeLabel: string;
  leadTitle: string;
  leadSummary: string;
  reasonText: string;
  logicTitle: string;
  logicItems: InfoPair[];
  alternativesTitle: string;
  alternatives: ArtisanMatch[];
  noticeTitle: string;
  noticeText: string;
  ctaLabel: string;
  footerNote: string;
};

export type DesignConfirmScreenData = {
  headerTitle: string;
  headerSubtitle: string;
  badgeLabel: string;
  leadTitle: string;
  leadSummary: string;
  confirmTitle: string;
  confirmItems: string[];
  detailTitle: string;
  details: InfoPair[];
  noticeTitle: string;
  noticeText: string;
  actions: ActionCard[];
  ctaLabel: string;
  footerNote: string;
};

export type ConversationMessage = {
  id: string;
  speaker: string;
  text: string;
  tone: 'user' | 'artisan';
};

export type ConversationScreenData = {
  headerTitle: string;
  headerSubtitle: string;
  badgeLabel: string;
  quoteLabel: string;
  quoteText: string;
  statusTitle: string;
  statusItems: InfoPair[];
  introTitle: string;
  introText: string;
  introNote: string;
  messages: ConversationMessage[];
  actions: ActionCard[];
  ctaLabel: string;
  footerNote: string;
};

export type ProgressStage = {
  id: string;
  title: string;
  detail: string;
  state: 'done' | 'current' | 'upcoming';
};

export type OrderProgressScreenData = {
  headerTitle: string;
  headerSubtitle: string;
  badgeLabel: string;
  leadTitle: string;
  leadSummary: string;
  statusTitle: string;
  stages: ProgressStage[];
  timelineTitle: string;
  timeline: InfoPair[];
  actions: ActionCard[];
  noticeTitle: string;
  noticeText: string;
  ctaLabel: string;
  footerNote: string;
};

export type OrderDetailScreenData = {
  headerTitle: string;
  headerSubtitle: string;
  badgeLabel: string;
  leadTitle: string;
  leadSummary: string;
  summaryTitle: string;
  summaryItems: InfoPair[];
  contextTitle: string;
  contextItems: InfoPair[];
  noteTitle: string;
  noteText: string;
  primaryNote?: string;
  secondaryNote?: string;
  ctaLabel: string;
  footerNote: string;
};

export type JourneyFlowData = {
  structuredResult: StructuredResultData;
  preview: PreviewScreenData;
  match: MatchScreenData;
  designConfirm: DesignConfirmScreenData;
  conversation: ConversationScreenData;
  orderProgress: OrderProgressScreenData;
};

export type ProfileScreenData = {
  headerTitle: string;
  headerSubtitle: string;
  badgeLabel: string;
  leadTitle: string;
  leadSummary: string;
  stageLabel: string;
  stageValue: string;
  nextNodeLabel: string;
  nextNodeValue: string;
  currentActionLabel: string;
  currentActionTitle: string;
  currentActionSummary: string;
  currentActionChecklist: string[];
  currentActionOutcome: string;
  versionTitle: string;
  versionTag: string;
  versionSummary: string;
  versionNote: string;
  orderTitle: string;
  orderSummary: string;
  orderTag: string;
  messageTitle: string;
  messageSummary: string;
  messageTag: string;
  messageActionLabel: string;
  historyTitle: string;
  historySummary: string;
  historyItems: Array<{
    id: string;
    version: string;
    title: string;
    summary: string;
    state: 'current' | 'done';
  }>;
  quickEntries: ActionCard[];
  recentTitle: string;
  recentItems: string[];
  accountTitle: string;
  accountSummary: string;
  accountItems: ActionCard[];
};

export type OnboardingRequirement = {
  id: string;
  title: string;
  description: string;
};

export type OnboardingStep = {
  id: string;
  label: string;
  state: 'done' | 'current' | 'upcoming';
};

export type OnboardingScreenData = {
  headerTitle: string;
  headerSubtitle: string;
  badgeLabel: string;
  leadEyebrow: string;
  leadEstimate: string;
  leadTitle: string;
  leadSummary: string;
  steps: OnboardingStep[];
  requirementTitle: string;
  requirements: OnboardingRequirement[];
  reviewTitle: string;
  reviewText: string;
  draftTitle: string;
  draftDescription: string;
  submitTitle: string;
  submitDescription: string;
  ctaLabel: string;
  footerNote: string;
};
