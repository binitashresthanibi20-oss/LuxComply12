import React from 'react';

// Enums
export enum RiskLevel {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  CRITICAL = 'Critical'
}

export enum TaskStatus {
  PENDING = 'Pending',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed',
  OVERDUE = 'Overdue'
}

export enum DocStatus {
  PROCESSING = 'Processing',
  COMPLETE = 'Complete',
  MISSING = 'Missing',
  NEEDS_CORRECTION = 'Needs Correction',
  EXPIRING_SOON = 'Expiring Soon',
  EXPIRED = 'Expired'
}

export enum DocCategory {
  IDENTIFICATION = 'Identification',
  GOVERNANCE = 'Governance',
  OWNERSHIP = 'Ownership & Control',
  AML_CFT = 'AML / CFT',
  INDIVIDUAL_KYC = 'Individual KYC',
  ONGOING_MONITORING = 'Ongoing Monitoring'
}

// Interfaces
export interface Client {
  id: string;
  name: string;
  type: string; 
  staffCount: number;
  location: string;
  riskLevel: RiskLevel;
  riskJustification: string; // Regulator requirement: why this rating?
  imageUrl: string;
  officers: string; 
  status: 'Active' | 'Inactive';
  responsibleEmail: string;
}

export interface ComplianceTask {
  id: string;
  title: string;
  category: 'AML' | 'Risk' | 'Compliance' | 'KYC';
  status: TaskStatus;
  riskLevel: RiskLevel;
  deadline: string;
  lastUpdated: string;
  clientName: string;
  isMissingDocs: boolean;
}

export interface Document {
  id: string;
  clientId?: string;
  name: string;
  category: DocCategory;
  type: string; 
  status: DocStatus;
  uploadDate: string;
  expiryDate?: string;
  owner: string;
  assignedReviewer?: string;
  fileUrl: string;
  storageRegion: 'eu-central-1' | 'eu-west-1'; 
  encryption: 'SSE-KMS' | 'SSE-S3';
  checksum?: string; 
  riskScore?: number;
  rejectionReason?: string;
  extractionConfidence?: number;
}

export interface AuditLog {
  id: string;
  timestamp: string;
  userEmail: string;
  action: string; 
  objectType: string;
  objectId: string;
  previousValue: string;
  newValue: string;
  storageUri?: string; 
  ipAddress?: string;
}

export interface AutomationRule {
  id: string;
  name: string;
  trigger: string;
  action: string;
  active: boolean;
  lastRun?: string;
}

export interface ComplianceTemplate {
  id: string;
  entityType: string;
  taskName: string;
  category: string;
  riskLevel: RiskLevel;
  frequency: string;
  requiredDocument: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Compliance Officer' | 'Viewer' | 'Regulator';
  status: 'Active' | 'Inactive';
  lastLogin: string;
}

export interface MenuItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
}