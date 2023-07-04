IF NOT EXISTS (
    SELECT
        *
    FROM
        sys.databases
    WHERE
        name = N'Mercurius_Price_local'
) CREATE DATABASE Mercurius_Price_local COLLATE Finnish_Swedish_CI_AS
GO
    ALTER DATABASE Mercurius_Price_local
SET
    RECOVERY SIMPLE
GO
    IF NOT EXISTS (
        SELECT
            *
        FROM
            MASTER.dbo.syslogins
        WHERE
            loginname = N'dev_user'
    ) CREATE LOGIN [dev_user] WITH PASSWORD = N'p@ssw0rd',
    DEFAULT_DATABASE = [Mercurius_Price_local],
    DEFAULT_LANGUAGE = [us_english],
    CHECK_EXPIRATION = OFF,
    CHECK_POLICY = OFF
GO
    USE Mercurius_Price_local
GO
