-- NOTE: This file is auto generated by ./sql-generator

-- UserRepository.getAdmin
SELECT
  "UserEntity"."id" AS "UserEntity_id",
  "UserEntity"."name" AS "UserEntity_name",
  "UserEntity"."avatarColor" AS "UserEntity_avatarColor",
  "UserEntity"."isAdmin" AS "UserEntity_isAdmin",
  "UserEntity"."email" AS "UserEntity_email",
  "UserEntity"."storageLabel" AS "UserEntity_storageLabel",
  "UserEntity"."externalPath" AS "UserEntity_externalPath",
  "UserEntity"."oauthId" AS "UserEntity_oauthId",
  "UserEntity"."profileImagePath" AS "UserEntity_profileImagePath",
  "UserEntity"."shouldChangePassword" AS "UserEntity_shouldChangePassword",
  "UserEntity"."createdAt" AS "UserEntity_createdAt",
  "UserEntity"."deletedAt" AS "UserEntity_deletedAt",
  "UserEntity"."updatedAt" AS "UserEntity_updatedAt",
  "UserEntity"."memoriesEnabled" AS "UserEntity_memoriesEnabled",
  "UserEntity"."quotaSizeInBytes" AS "UserEntity_quotaSizeInBytes",
  "UserEntity"."quotaUsageInBytes" AS "UserEntity_quotaUsageInBytes"
FROM
  "users" "UserEntity"
WHERE
  (("UserEntity"."isAdmin" = $1))
  AND ("UserEntity"."deletedAt" IS NULL)
LIMIT
  1

-- UserRepository.hasAdmin
SELECT
  1 AS "row_exists"
FROM
  (
    SELECT
      1 AS dummy_column
  ) "dummy_table"
WHERE
  EXISTS (
    SELECT
      1
    FROM
      "users" "UserEntity"
    WHERE
      (("UserEntity"."isAdmin" = $1))
      AND ("UserEntity"."deletedAt" IS NULL)
  )
LIMIT
  1

-- UserRepository.getByEmail
SELECT
  "user"."id" AS "user_id",
  "user"."name" AS "user_name",
  "user"."avatarColor" AS "user_avatarColor",
  "user"."isAdmin" AS "user_isAdmin",
  "user"."email" AS "user_email",
  "user"."storageLabel" AS "user_storageLabel",
  "user"."externalPath" AS "user_externalPath",
  "user"."oauthId" AS "user_oauthId",
  "user"."profileImagePath" AS "user_profileImagePath",
  "user"."shouldChangePassword" AS "user_shouldChangePassword",
  "user"."createdAt" AS "user_createdAt",
  "user"."deletedAt" AS "user_deletedAt",
  "user"."updatedAt" AS "user_updatedAt",
  "user"."memoriesEnabled" AS "user_memoriesEnabled",
  "user"."quotaSizeInBytes" AS "user_quotaSizeInBytes",
  "user"."quotaUsageInBytes" AS "user_quotaUsageInBytes"
FROM
  "users" "user"
WHERE
  ("user"."email" = $1)
  AND ("user"."deletedAt" IS NULL)

-- UserRepository.getByStorageLabel
SELECT
  "UserEntity"."id" AS "UserEntity_id",
  "UserEntity"."name" AS "UserEntity_name",
  "UserEntity"."avatarColor" AS "UserEntity_avatarColor",
  "UserEntity"."isAdmin" AS "UserEntity_isAdmin",
  "UserEntity"."email" AS "UserEntity_email",
  "UserEntity"."storageLabel" AS "UserEntity_storageLabel",
  "UserEntity"."externalPath" AS "UserEntity_externalPath",
  "UserEntity"."oauthId" AS "UserEntity_oauthId",
  "UserEntity"."profileImagePath" AS "UserEntity_profileImagePath",
  "UserEntity"."shouldChangePassword" AS "UserEntity_shouldChangePassword",
  "UserEntity"."createdAt" AS "UserEntity_createdAt",
  "UserEntity"."deletedAt" AS "UserEntity_deletedAt",
  "UserEntity"."updatedAt" AS "UserEntity_updatedAt",
  "UserEntity"."memoriesEnabled" AS "UserEntity_memoriesEnabled",
  "UserEntity"."quotaSizeInBytes" AS "UserEntity_quotaSizeInBytes",
  "UserEntity"."quotaUsageInBytes" AS "UserEntity_quotaUsageInBytes"
FROM
  "users" "UserEntity"
WHERE
  (("UserEntity"."storageLabel" = $1))
  AND ("UserEntity"."deletedAt" IS NULL)
LIMIT
  1

-- UserRepository.getByOAuthId
SELECT
  "UserEntity"."id" AS "UserEntity_id",
  "UserEntity"."name" AS "UserEntity_name",
  "UserEntity"."avatarColor" AS "UserEntity_avatarColor",
  "UserEntity"."isAdmin" AS "UserEntity_isAdmin",
  "UserEntity"."email" AS "UserEntity_email",
  "UserEntity"."storageLabel" AS "UserEntity_storageLabel",
  "UserEntity"."externalPath" AS "UserEntity_externalPath",
  "UserEntity"."oauthId" AS "UserEntity_oauthId",
  "UserEntity"."profileImagePath" AS "UserEntity_profileImagePath",
  "UserEntity"."shouldChangePassword" AS "UserEntity_shouldChangePassword",
  "UserEntity"."createdAt" AS "UserEntity_createdAt",
  "UserEntity"."deletedAt" AS "UserEntity_deletedAt",
  "UserEntity"."updatedAt" AS "UserEntity_updatedAt",
  "UserEntity"."memoriesEnabled" AS "UserEntity_memoriesEnabled",
  "UserEntity"."quotaSizeInBytes" AS "UserEntity_quotaSizeInBytes",
  "UserEntity"."quotaUsageInBytes" AS "UserEntity_quotaUsageInBytes"
FROM
  "users" "UserEntity"
WHERE
  (("UserEntity"."oauthId" = $1))
  AND ("UserEntity"."deletedAt" IS NULL)
LIMIT
  1

-- UserRepository.getUserStats
SELECT
  "users"."id" AS "userId",
  "users"."name" AS "userName",
  "users"."quotaSizeInBytes" AS "quotaSizeInBytes",
  COUNT("assets"."id") FILTER (
    WHERE
      "assets"."type" = 'IMAGE'
      AND "assets"."isVisible"
  ) AS "photos",
  COUNT("assets"."id") FILTER (
    WHERE
      "assets"."type" = 'VIDEO'
      AND "assets"."isVisible"
  ) AS "videos",
  COALESCE(SUM("exif"."fileSizeInByte"), 0) AS "usage"
FROM
  "users" "users"
  LEFT JOIN "assets" "assets" ON "assets"."ownerId" = "users"."id"
  AND ("assets"."deletedAt" IS NULL)
  LEFT JOIN "exif" "exif" ON "exif"."assetId" = "assets"."id"
WHERE
  "users"."deletedAt" IS NULL
GROUP BY
  "users"."id"
ORDER BY
  "users"."createdAt" ASC

-- UserRepository.syncUsage
UPDATE "users"
SET
  "quotaUsageInBytes" = (
    SELECT
      COALESCE(SUM(exif."fileSizeInByte"), 0)
    FROM
      "assets" "assets"
      LEFT JOIN "exif" "exif" ON "exif"."assetId" = "assets"."id"
    WHERE
      "assets"."ownerId" = users.id
  ),
  "updatedAt" = CURRENT_TIMESTAMP
WHERE
  users.id = $1
