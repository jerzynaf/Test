USE [HOLIDAY-PLANNER]
GO

/****** Object:  View [dbo].[vwBrowseCoreFleet]    Script Date: 27/05/2016 15:45:33 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[vwBrowseCoreFleet] AS
( 
 SELECT FleetId, Breadcrumb, DisposalDate
  FROM Fleet
)


GO