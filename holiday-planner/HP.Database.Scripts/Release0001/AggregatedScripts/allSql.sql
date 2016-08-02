USE [HOLIDAY-PLANNER]
GO

SET NOCOUNT ON

DECLARE @ItemsToDrop  TABLE (Id Int Identity, Name nvarchar(100), DeleteOrder int)

/*  PLEASE NOTE TABLES ARE LISTED IN THE ORDER THEY NEED TO BE DELETED */

INSERT INTO @ItemsToDrop ( Name)
VALUES 
(	'Member'		)

DECLARE @Name	NVARCHAR(100);
DECLARE @Identity	INT

WHILE (SELECT COUNT(*) FROM @ItemsToDrop) > 0
BEGIN
	
	SELECT	TOP 1	@Name = Name, @Identity = Id	FROM @ItemsToDrop Order By ID ASC
	
	IF EXISTS (SELECT * from INFORMATION_SCHEMA.TABLES t WHERE t.TABLE_NAME = @Name AND t.TABLE_SCHEMA = 'dbo' AND t.TABLE_CATALOG = 'CVL-FLEET' AND TABLE_TYPE = 'BASE TABLE')
		BEGIN		
			PRINT ('Dropping Table [' + @Name + ']')		
			EXEC ('DROP TABLE [' +  @Name + ']')	
		END			
	ELSE
		BEGIN
			PRINT ('Dropping Table [' + @Name + ']  - does not exist')
		END
	

	DELETE FROM @ItemsToDrop WHERE Id = @Identity

END

GO


USE [HOLIDAY-PLANNER]
GO

print 'create member table'
go


CREATE TABLE [dbo].[Member](
	[MemberId] [uniqueidentifier] NOT NULL,
	[UserName] [nvarchar](200) NOT NULL,
	[Password] [nvarchar](200) NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[DateLastLoggedIn] [datetime] NOT NULL,
	[Forename] [nvarchar](200) NULL,
	[Surname] [nvarchar](200) NULL,
	[RoleId] [int] NOT NULL,
	[RoleEnabled] [bit] NOT NULL,
	[Email] [nvarchar](200) NULL
 CONSTRAINT [PK_Member] PRIMARY KEY CLUSTERED 
(
	[MemberId] ASC
)) ON [PRIMARY]

GO
USE [HOLIDAY-PLANNER]
GO

/****** Object:  Table [dbo].[Role]    Script Date: 03/06/2016 13:59:24 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Role](
	[RoleId] [int] NOT NULL,
	[Name] [nvarchar](100) NULL,
 CONSTRAINT [PK_Role] PRIMARY KEY CLUSTERED 
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO



USE [HOLIDAY-PLANNER]
GO

SET NOCOUNT ON

PRINT 'create data - Test Members (users)'
GO

INSERT INTO [Member]
(MemberId									,UserName		,Password	,DateOfBirth, DateCreated	,DateLastLoggedIn, LocationName) VALUES
('A5A23431-9DC0-48CC-8CA4-884745C25025'		,'Filip'		,'password'	,GetDate(), GetDate(),GetDate(), 'TestLocation')

GO


