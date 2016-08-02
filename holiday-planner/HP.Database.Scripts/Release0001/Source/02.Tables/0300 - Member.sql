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