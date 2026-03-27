import { handleAuthRoute } from './auth.js';
import { handleBootstrapRoute } from './bootstrap.js';
import { handleClientErrorsRoute } from './client-errors.js';
import { handleCraftPlansRoute } from './craft-plans.js';
import { handleHealthRoute } from './health.js';
import { handleOrdersRoute } from './orders.js';
import { handleRequirementsRoute } from './requirements.js';
import { handleUploadsRoute } from './uploads.js';

export const routes = [
  handleHealthRoute,
  handleBootstrapRoute,
  handleAuthRoute,
  handleUploadsRoute,
  handleRequirementsRoute,
  handleCraftPlansRoute,
  handleOrdersRoute,
  handleClientErrorsRoute,
];
