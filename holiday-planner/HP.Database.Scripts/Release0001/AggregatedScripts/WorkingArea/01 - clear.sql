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

