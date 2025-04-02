module.exports = {
  title: '帮助文档',
  base: '/koc-view-mapping/',
  themeConfig: {
    sidebar: {
      // 根目录配置
      '/': [
    {
        "title": "Asset Performance Management",
        "collapsable": true,
        "sidebarDepth": 2,
        "children": [
            {
                "title": "Integrated Well Delivery",
                "path": "./mdfiles/workover-selection.md",
                "collapsable": false
            },
            {
                "title": "Automatic Producers Model Management ",
                "path": "/mdfiles/workflow-awms.md",
                "collapsable": false
            },
            {
                "title": "Automatic Injectors Model Management",
                "path": "/mdfiles/workflow-awms-inj.md",
                "collapsable": false
            },
            {
                "title": "Well Review Summary",
                "path": "/mdfiles/asset-review-and-summary-esp.md",
                "collapsable": false
            },
            {
                "title": "Closed Well Summary ",
                "path": "/mdfiles/closed-well-summary.md",
                "collapsable": false
            }
        ]
    },
    {
        "title": "S&EK Reports",
        "collapsable": true,
        "sidebarDepth": 2,
        "children": [
            {
                "title": "Daily Morning Report",
                "path": "/mdfiles/report-overview.md",
                "collapsable": false
            },
            {
                "title": "Well Review Summary Report",
                "path": "/mdfiles/daily-morning-report.md",
                "collapsable": false
            }
        ]
    },
    {
        "title": "KOC Business Document",
        "collapsable": true,
        "sidebarDepth": 2,
        "children": [
            {
                "title": "KOC Business Commercial",
                "path": "/mdfiles/koc-business-commercial.md",
                "collapsable": false
            },
            {
                "title": "KOC HSE Guidelines",
                "path": "/mdfiles/koc-doc-hse.md",
                "collapsable": false
            },
            {
                "title": "KOC Checklist & Forms",
                "path": "/mdfiles/koc-doc-checklist.md",
                "collapsable": false
            },
            {
                "title": "KOC 2040 Strategy",
                "path": "/mdfiles/koc-doc-2024.md",
                "collapsable": false
            },
            {
                "title": "KOC Planning",
                "path": "/mdfiles/koc-doc-plan.md",
                "collapsable": false
            },
            {
                "title": "KOC HR",
                "path": "/mdfiles/koc-doc-hr.md",
                "collapsable": false
            }
        ]
    },
    {
        "title": "Operations Dashboard",
        "collapsable": true,
        "sidebarDepth": 2,
        "children": [
            {
                "title": "Water Injector Status Report",
                "path": "/mdfiles/water-injector-status-report.md",
                "collapsable": false
            },
            {
                "title": "Asset Decision Dashboard",
                "path": "/mdfiles/wk-dceo.md",
                "collapsable": false
            },
            {
                "title": "Asset Summary",
                "path": "/mdfiles/asset-summary.md",
                "collapsable": false
            },
            {
                "title": "Team Summary",
                "path": "/mdfiles/team-summary.md",
                "collapsable": false
            },
            {
                "title": "GC Summary",
                "path": "/mdfiles/gc-summary.md",
                "collapsable": false
            },
            {
                "title": "Well Injection Summary",
                "path": "/mdfiles/asset-review-and-summary-injector.md",
                "collapsable": false
            },
            {
                "title": "Reservoir Review",
                "path": "/mdfiles/asset-review-and-summary-reservoir.md",
                "collapsable": false
            },
            {
                "title": "S&EK Rig Management",
                "path": "/mdfiles/dso.md",
                "collapsable": false
            },
            {
                "title": "Reservoir Management",
                "path": "/mdfiles/reservoir-management.md",
                "collapsable": false
            },
            {
                "title": "IWD Performance Tracking",
                "path": "/mdfiles/iwd-performance-tracking.md",
                "collapsable": false
            },
            {
                "title": "Well Report",
                "path": "/mdfiles/well-report.md",
                "collapsable": false
            },
            {
                "title": "Diesel Distribution",
                "path": "/mdfiles/diesel-distribution.md",
                "collapsable": false
            }
        ]
    },
    {
        "title": "Smart Production Surveillance",
        "collapsable": true,
        "sidebarDepth": 2,
        "children": [
            {
                "title": "Realtime Dashboard",
                "path": "/mdfiles/realtime-analysis.md",
                "collapsable": false
            },
            {
                "title": "Realtime Data Analysis & QC (Manifolds)",
                "path": "/mdfiles/equipment-realtime-analysis.md",
                "collapsable": false
            },
            {
                "title": "Well History Realtime",
                "path": "/mdfiles/sps-well-history-realtime.md",
                "collapsable": false
            },
            {
                "title": "Well History",
                "path": "/mdfiles/sps-well-history.md",
                "collapsable": false
            },
            {
                "title": "Virtual Rate Analysis",
                "path": "/mdfiles/sps-virtual-rate-analysis.md",
                "collapsable": false
            },
            {
                "title": "Downtime",
                "path": "/mdfiles/sps-downtime.md",
                "collapsable": false
            },
            {
                "title": "Daily Workover Status",
                "path": "/mdfiles/sps-rig-workover-report.md",
                "collapsable": false
            },
            {
                "title": "Daily Drilling Status",
                "path": "/mdfiles/sps-rig-drilling-report.md",
                "collapsable": false
            },
            {
                "title": "Well Health Scan - Overview",
                "path": "/mdfiles/well-health-scan-overview.md",
                "collapsable": false
            },
            {
                "title": "Well Health Scan",
                "path": "/mdfiles/well-health-scan-analysis.md",
                "collapsable": false
            }
        ]
    },
    {
        "title": "Well Performance Evaluation",
        "collapsable": true,
        "sidebarDepth": 2,
        "children": [
            {
                "title": "Overview",
                "path": "/mdfiles/wpe-overview-new.md",
                "collapsable": false
            },
            {
                "title": "Well Model Calibration",
                "path": "/mdfiles/wpe-well-model-calibration-new.md",
                "collapsable": false
            },
            {
                "title": "Water Injector Overview",
                "path": "/mdfiles/wpe-overview-injector.md",
                "collapsable": false
            },
            {
                "title": "Water Injector Well Model Calibration",
                "path": "/mdfiles/wpe-well-model-calibration-injector.md",
                "collapsable": false
            }
        ]
    },
    {
        "title": "ESP Optimization",
        "collapsable": true,
        "sidebarDepth": 2,
        "children": [
            {
                "title": "Overview",
                "path": "/mdfiles/esp-overview.md",
                "collapsable": false
            },
            {
                "title": "Analysis & Optimization",
                "path": "/mdfiles/esp-analysis-optimization.md",
                "collapsable": false
            },
            {
                "title": "Well Health Review",
                "path": "/mdfiles/sps-esp-pressure-maintenance.md",
                "collapsable": false
            }
        ]
    },
    {
        "title": "NF Optimization",
        "collapsable": true,
        "sidebarDepth": 2,
        "children": [
            {
                "title": "Overview",
                "path": "/mdfiles/np-overview.md",
                "collapsable": false
            },
            {
                "title": "Analysis & Optimization",
                "path": "/mdfiles/nf-analysis-optimization.md",
                "collapsable": false
            }
        ]
    },
    {
        "title": "WI Optimization",
        "collapsable": true,
        "sidebarDepth": 2,
        "children": [
            {
                "title": "Overview",
                "path": "/mdfiles/wi-overview.md",
                "collapsable": false
            },
            {
                "title": "Analysis & Optimization",
                "path": "/mdfiles/wi-analysis-optimization.md",
                "collapsable": false
            }
        ]
    },
    {
        "title": "PCP Optimization",
        "collapsable": true,
        "sidebarDepth": 2,
        "children": [
            {
                "title": "Overview",
                "path": "/mdfiles/pcp-overview.md",
                "collapsable": false
            },
            {
                "title": "Analysis & Optimization",
                "path": "/mdfiles/pcp-analysis-optimization.md",
                "collapsable": false
            }
        ]
    },
    {
        "title": "SRP Optimization",
        "collapsable": true,
        "sidebarDepth": 2,
        "children": [
            {
                "title": "Overview",
                "path": "/mdfiles/srp-overview.md",
                "collapsable": false
            },
            {
                "title": "Analysis & Optimization",
                "path": "/mdfiles/srp-analysis-optimization.md",
                "collapsable": false
            }
        ]
    },
    {
        "title": "Facility Management System",
        "collapsable": true,
        "sidebarDepth": 2,
        "children": [
            {
                "title": "Facility Dashboard Overview",
                "path": "/mdfiles/gc-facility.md",
                "collapsable": false
            },
            {
                "title": "Facility Document Management",
                "path": "/mdfiles/facility-doc.md",
                "collapsable": false
            }
        ]
    },
    {
        "title": "IPO",
        "collapsable": true,
        "sidebarDepth": 2,
        "children": [
            {
                "title": "Asset Surface Network",
                "path": "/mdfiles/ipo-spnm.md",
                "collapsable": false
            },
            {
                "title": "IPO Hourly Run",
                "path": "/mdfiles/ipo-hour.md",
                "collapsable": false
            },
            {
                "title": "Automatic Choke/ESP Optimization (ACEO)",
                "path": "/mdfiles/ipo-opt.md",
                "collapsable": false
            },
            {
                "title": "AD-HOC",
                "path": "/mdfiles/ipo-adhoc.md",
                "collapsable": false
            }
        ]
    },
    {
        "title": "Ticket",
        "collapsable": true,
        "sidebarDepth": 2,
        "children": [
            {
                "title": "PGOR Request",
                "path": "/mdfiles/workflow-form-process.md",
                "collapsable": false
            },
            {
                "title": "New Ticket",
                "path": "/mdfiles/create-ticket.md",
                "collapsable": false
            },
            {
                "title": "Ticket List",
                "path": "/mdfiles/ticket-list.md",
                "collapsable": false
            },
            {
                "title": "Ticket Summary",
                "path": "/mdfiles/ticket-summary.md",
                "collapsable": false
            },
            {
                "title": "Task Summary",
                "path": "/mdfiles/task-summary.md",
                "collapsable": false
            },
            {
                "title": "Ticket Metrics",
                "path": "/mdfiles/ticket-metrics.md",
                "collapsable": false
            },
            {
                "title": "Ticket Detail",
                "path": "/mdfiles/ticket-stage.md",
                "collapsable": false
            }
        ]
    },
    {
        "title": "Data Setting",
        "collapsable": true,
        "sidebarDepth": 2,
        "children": [
            {
                "title": "Well Data Preparing",
                "path": "/mdfiles/DS_WellDataPreparing.md",
                "collapsable": false
            },
            {
                "title": "Well Data Source",
                "path": "/mdfiles/DS_WellDataSource.md",
                "collapsable": false
            },
            {
                "title": "Well Measure Health Check",
                "path": "/mdfiles/DS_WellHealthCheck.md",
                "collapsable": false
            },
            {
                "title": "Surface Measurement",
                "path": "/mdfiles/ds-surface-measurement.md",
                "collapsable": false
            },
            {
                "title": "Capacity Management",
                "path": "/mdfiles/ds-capacity-management.md",
                "collapsable": false
            },
            {
                "title": "Data Integrity",
                "path": "/mdfiles/data-integrity.md",
                "collapsable": false
            },
            {
                "title": "Allowable Production",
                "path": "/mdfiles/allowable-production.md",
                "collapsable": false
            },
            {
                "title": "Reservoir Pressure Entry",
                "path": "/mdfiles/reservoir-pressure-entry.md",
                "collapsable": false
            },
            {
                "title": "Sahala Form",
                "path": "/mdfiles/information-management.md",
                "collapsable": false
            }
        ]
    },
    {
        "title": "System Health",
        "collapsable": true,
        "sidebarDepth": 2,
        "children": [
            {
                "title": "System Monitor",
                "path": "/mdfiles/sh-server-performance.md",
                "collapsable": false
            },
            {
                "title": "Data Quality",
                "path": "/mdfiles/general-quality-control.md",
                "collapsable": false
            }
        ]
    },
    {
        "title": "Administrator",
        "collapsable": true,
        "sidebarDepth": 2,
        "children": [
            {
                "title": "General",
                "path": "/mdfiles/setting-general.md",
                "collapsable": false
            },
            {
                "title": "Alarm Notification",
                "path": "/mdfiles/sdh-setting.md",
                "collapsable": false
            },
            {
                "title": "Alarm Threshold",
                "path": "/mdfiles/alarm-threshold.md",
                "collapsable": false
            },
            {
                "title": "Well Health Scan",
                "path": "/mdfiles/setting-health-scan.md",
                "collapsable": false
            },
            {
                "title": "Well Master Data Management",
                "path": "/mdfiles/setting-well-name.md",
                "collapsable": false
            },
            {
                "title": "Report",
                "path": "/mdfiles/report-setting.md",
                "collapsable": false
            },
            {
                "title": "Well Tag",
                "path": "/mdfiles/setting-well-tag.md",
                "collapsable": false
            },
            {
                "title": "Data Entitlement",
                "path": "/mdfiles/data-entitlement.md",
                "collapsable": false
            },
            {
                "title": "Workflow",
                "path": "/mdfiles/setting-workflow.md",
                "collapsable": false
            },
            {
                "title": "KPM Data Management",
                "path": "/mdfiles/deco-kpm-edit.md",
                "collapsable": false
            },
            {
                "title": "Document Management",
                "path": "/mdfiles/management-document.md",
                "collapsable": false
            },
            {
                "title": "System Utilization",
                "path": "/mdfiles/system-utilization.md",
                "collapsable": false
            }
        ]
    },
    {
        "title": "KOC Planning Dashboards",
        "collapsable": true,
        "sidebarDepth": 2,
        "children": [
            {
                "title": "Night Figure Entry Form",
                "path": "/mdfiles/night-figure-form.md",
                "collapsable": false
            },
            {
                "title": "MPGOR Dashboard",
                "path": "/mdfiles/mpgor-dashboard.md",
                "collapsable": false
            },
            {
                "title": "Group Performance Dashboard",
                "path": "/mdfiles/group-performance.md",
                "collapsable": false
            },
            {
                "title": "Asset Scorecard",
                "path": "/mdfiles/asset-scorecard.md",
                "collapsable": false
            }
        ]
    },
    {
        "title": "Repository",
        "collapsable": true,
        "sidebarDepth": 2,
        "children": [
            {
                "title": "Workflows",
                "path": "/mdfiles/workflows.md",
                "collapsable": false
            },
            {
                "title": "Models",
                "path": "/mdfiles/models.md",
                "collapsable": false
            }
        ]
    },
    {
        "title": "Admin Panel",
        "collapsable": true,
        "sidebarDepth": 2,
        "children": [
            {
                "title": "Users and Roles",
                "path": "/mdfiles/setting.md",
                "collapsable": false
            },
            {
                "title": "User Interfaces",
                "path": "/mdfiles/user-interfaces.md",
                "collapsable": false
            },
            {
                "title": "PgAdmin",
                "path": "/mdfiles/ .md",
                "collapsable": false
            },
            {
                "title": "Settings",
                "path": "/mdfiles/setting-technology.md",
                "collapsable": false
            }
        ]
    }
]
	}
  }
};