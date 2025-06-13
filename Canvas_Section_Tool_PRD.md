**Product Requirements Document (PRD)**

**Project Name:** Canvas Section Management Tool
**Owner:** \[Anwar / Canvas LMS Admin]
**Target Platform:** Canvas LMS (LTI-compatible)
**Delivery Methodology:** Agile (Scrum / Iterative Sprints)
**Version:** 1.0
**Last Updated:** [Current Date]

---

## 1. **Overview**

The Section Management Tool is a lightweight, educator-friendly interface built directly within Canvas LMS to streamline the creation, allocation, and management of student sections. This tool is designed to augment or replace the limitations of existing systems such as Canvas Groups and AllocatePlus, while ensuring fairness, compliance, and improved user experience for educators.

---

## 2. **Goals & Objectives**

* Enable educators to create and manage sections within Canvas intuitively.
* Automatically balance student-to-educator ratios (target: 1:25).
* Support manual and automated student allocation workflows.
* Integrate census date workflows (pre-finalization and locking).
* Ensure privacy-safe section naming and student visibility handling.
* Provide a future-ready tool that can be scaled or commercialized.

**Success Metrics:**
* 90% reduction in time spent on section management
* 100% compliance with student privacy requirements
* 95% accuracy in automated student allocation
* < 1% error rate in section assignments
* 100% uptime during critical census periods

---

## 3. **Key Features & Requirements**

| ID  | Feature                          | Description                                                                              | Priority | Acceptance Criteria |
| --- | -------------------------------- | ---------------------------------------------------------------------------------------- | -------- | ------------------ |
| F1  | Educator-Driven Section Creation | Simple UI to create, edit, and manage sections within Canvas                             | P0       | - Create section with name and capacity<br>- Edit section details<br>- Delete empty sections |
| F2  | Automated Student Allocation     | System automatically assigns students to sections based on a 1:25 ratio                  | P0       | - Balance students within ±2 of target ratio<br>- Handle odd numbers of students<br>- Maintain fairness across sections |
| F3  | Manual Student Assignment UI     | Educators can manually select students and assign to sections via an intuitive interface | P0       | - Drag-and-drop interface<br>- Bulk selection support<br>- Visual feedback on capacity |
| F4  | Census Date Handling             | Sections are provisional until educator-defined census date; lock afterward              | P0       | - Set census date<br>- Lock sections automatically<br>- Prevent post-census changes |
| F5  | Fairness & Ratio Logic           | Ensure student load is balanced fairly among educators                                   | P0       | - Maximum 2 student difference between sections<br>- Alert on imbalance<br>- Auto-rebalance option |
| F6  | Internal vs Display Names        | Allow educators to set an internal name and a student-facing name per section           | P1       | - Separate internal/external names<br>- Preview student view<br>- Bulk name management |
| F7  | Student Visibility Toggle        | Educator can toggle if section name is visible to students                              | P1       | - Toggle visibility per section<br>- Bulk visibility management<br>- Preview student view |
| F8  | Soft Governance Warning          | Trigger warning if a sensitive term is used in the display name                         | P1       | - Real-time name checking<br>- Warning display<br>- Suggestion alternatives |
| F9  | Rebalancing Workflow             | Tool can redistribute students to maintain ratios when enrollment shifts occur          | P1       | - Auto-detect imbalance<br>- Propose rebalancing<br>- Preview changes |
| F10 | Educator Override                | Educators can override any auto-allocation manually before finalization                  | P0       | - Override individual assignments<br>- Bulk override support<br>- Override logging |
| F11 | CSV Upload Option                | Advanced users can upload CSV to manage student-section mappings                        | P2       | - CSV template download<br>- Validation on upload<br>- Error reporting |
| F12 | LTI-Based Integration            | Tool is built as an LTI tool compatible with Canvas API & authentication                | P0       | - Seamless Canvas integration<br>- Role-based access<br>- Secure authentication |
| F13 | Audit Trail                      | All section changes are logged for transparency and compliance                          | P1       | - Change logging<br>- Export logs<br>- Filter/search logs |
| F14 | Real-Time Dashboard              | View section stats, educator loads, and distribution visuals                            | P1       | - Real-time updates<br>- Visual statistics<br>- Export reports |

---

## 4. **User Roles & Permissions**

| Role | Permissions | Access Level |
|------|-------------|--------------|
| Educator | - Create/edit sections<br>- Assign students<br>- Set census date<br>- Toggle visibility | Course Level |
| Unit Coordinator | - All Educator permissions<br>- Lock sections<br>- View audit trail<br>- Override assignments | Course Level |
| Canvas Admin | - Install/configure tool<br>- Set global settings<br>- View all courses<br>- Manage branding | Institution Level |
| Student | - View assigned section<br>- View section name (if visible) | Course Level |

---

## 5. **User Stories**

### Educator

* As an educator, I want to auto-allocate students into balanced sections so that I don't have to do it manually.
* As an educator, I want to manually assign students to sections via a simple UI so that I can maintain control.
* As an educator, I want to preview and approve auto-assignments before saving them.
* As an educator, I want to hide section names from students or rename them appropriately to avoid student distress.
* As an educator, I want to receive a warning when using potentially problematic section names so I can correct them.
* As an educator, I want to override automated logic to move specific students where needed.

### Unit Coordinator

* As a lead educator, I want to define the census date so that section locking aligns with university policy.
* As a lead educator, I want to lock section allocations post-census to prevent further changes.
* As a lead educator, I want to review an audit trail of section changes.

### Canvas Admin

* As a Canvas admin, I want to install and configure the LTI tool with minimal friction.
* As a Canvas admin, I want to set institution-wide naming conventions if required.

---

## 6. **Non-Functional Requirements**

### Performance
* Page load time < 2 seconds
* API response time < 1 second
* Support for up to 5,000 students per course
* Handle up to 100 concurrent users

### Security
* OAuth2 authentication
* HTTPS encryption
* Role-based access control
* Audit logging of all changes
* Data encryption at rest

### Accessibility
* WCAG 2.1 AA compliance
* Keyboard navigation
* Screen reader support
* High contrast mode
* Responsive design

### Compatibility
* Modern browsers (Chrome, Firefox, Safari, Edge)
* Canvas mobile app support
* Tablet-friendly interface
* Minimum screen width: 320px

### Reliability
* 99.9% uptime
* Automatic error recovery
* Data backup every 24 hours
* Disaster recovery plan

---

## 7. **Assumptions**

* All students are already enrolled in the Canvas unit
* Census date logic can be managed at the unit level
* Educator-to-student ratio defaults to 1:25 but can be overridden
* Canvas API access is available
* LTI 1.3 is supported by the Canvas instance
* Internet connectivity is reliable
* Users have modern web browsers

---

## 8. **Out of Scope (MVP)**

* Timetable/schedule integration
* Peer review or collaborative features
* Mobile app support
* Integration with external systems
* Advanced analytics
* Custom reporting
* Bulk import/export
* API access for external tools

---

## 9. **Open Questions**

* How should overlapping Canvas/AllocatePlus sections be handled?
* Should the tool support import/export of rules/templates for reuse?
* Do we offer analytics on section performance (post-MVP)?
* How to handle students who enroll after census date?
* What is the process for handling section conflicts?

---

## 10. **Initial Sprint Breakdown**

| Sprint   | Goal                                                         | Deliverables |
| -------- | ------------------------------------------------------------ | ------------ |
| Sprint 0 | Canvas API exploration, LTI boilerplate setup, UI wireframes | - API documentation<br>- LTI setup guide<br>- UI mockups |
| Sprint 1 | Section creation UI + student list integration               | - Section CRUD<br>- Student list view<br>- Basic UI |
| Sprint 2 | Auto-allocation logic with fairness enforcement              | - Allocation algorithm<br>- Fairness checks<br>- Preview UI |
| Sprint 3 | Manual override + student visibility UI                      | - Manual assignment<br>- Visibility toggles<br>- Student view |
| Sprint 4 | Census date logic + section locking mechanism                | - Date picker<br>- Locking system<br>- Validation |
| Sprint 5 | Soft governance + internal/display name handling             | - Name validation<br>- Warning system<br>- Name management |
| Sprint 6 | Dashboard, audit trail, final QA & testing                   | - Dashboard<br>- Audit system<br>- Test reports |

---

## 11. **Error Handling & Recovery**

### User Errors
* Invalid section names
* Over-capacity assignments
* Invalid census dates
* Duplicate section names

### System Errors
* API failures
* Database errors
* Authentication issues
* Network timeouts

### Recovery Procedures
* Automatic retry for API calls
* Data validation before save
* Error logging and alerts
* User notification system

---

## 12. **Appendix: Sensitive Keywords Flag List**

* high-risk
* low performers
* remedial
* struggling
* ESL
* international
* low-bandwidth

> System will issue warnings for these terms if used in student-visible section names.

---

## 13. **Data Management**

### Data Retention
* Section data: Until course end + 1 year
* Audit logs: 5 years
* User preferences: Until course end

### Backup Strategy
* Daily automated backups
* Point-in-time recovery
* Export functionality
* Archive policy

---

This document will evolve with ongoing user feedback and iterative sprint reviews.
