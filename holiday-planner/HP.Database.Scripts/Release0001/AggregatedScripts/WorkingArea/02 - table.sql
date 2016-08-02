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


