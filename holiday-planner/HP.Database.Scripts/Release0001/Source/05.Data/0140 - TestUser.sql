USE [HOLIDAY-PLANNER]
GO

SET NOCOUNT ON

PRINT 'create data - Test Members (users)'
GO

INSERT INTO [Member]
(MemberId									,UserName		,Password	,DateOfBirth, DateCreated	,DateLastLoggedIn, LocationName) VALUES
('A5A23431-9DC0-48CC-8CA4-884745C25025'		,'Filip'		,'password'	,GetDate(), GetDate(),GetDate(), 'TestLocation')

GO


