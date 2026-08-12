/**
 * DATA — CyberCrowd
 *
 * Access Surface Registry
 *
 * ONE JOB:
 * Declare the structural access surfaces exposed by DATA.
 *
 * Ownership boundary:
 *
 *   DATA
 *    │
 *    ├── DATA-DEFINITION
 *    ├── DATA-IDENTITY
 *    ├── DATA-CONTINUITY
 *    └── DATA-EVIDENCE
 *
 * This module does not:
 * - execute service behavior
 * - infer capability
 * - infer intent
 * - authorize actions
 * - transform data definitions
 * - enrich evidence
 * - create relationships
 * - transfer ownership
 *
 * It only declares the DATA access-surface structure.
 */

export default {
  data: {
    definition: "DATA-DEFINITION",
    identity: "DATA-IDENTITY",
    continuity: "DATA-CONTINUITY",
    evidence: "DATA-EVIDENCE",
  },
};
