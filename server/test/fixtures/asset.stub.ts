import { AssetEntity, AssetType, ExifEntity } from '@app/infra/entities';
import { authStub } from './auth.stub';
import { dateStub } from './date.stub';
import { fileStub } from './file.stub';
import { libraryStub } from './library.stub';
import { userStub } from './user.stub';

export const assetStub = {
  noResizePath: Object.freeze<AssetEntity>({
    id: 'asset-id',
    originalFileName: 'IMG_123',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: dateStub.FEB_23_2023,
    fileCreatedAt: dateStub.FEB_23_2023,
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: 'upload/library/IMG_123.jpg',
    resizePath: null,
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    webpPath: '/uploads/user-id/webp/path.ext',
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: dateStub.FEB_23_2023,
    updatedAt: dateStub.FEB_23_2023,
    localDateTime: dateStub.FEB_23_2023,
    isFavorite: true,
    isArchived: false,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    faces: [],
    sidecarPath: null,
    isReadOnly: false,
    deletedAt: null,
    isOffline: false,
    isExternal: false,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
  }),

  noWebpPath: Object.freeze<AssetEntity>({
    id: 'asset-id',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: dateStub.FEB_23_2023,
    fileCreatedAt: dateStub.FEB_23_2023,
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: 'upload/library/IMG_456.jpg',
    resizePath: '/uploads/user-id/thumbs/path.ext',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    webpPath: null,
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: dateStub.FEB_23_2023,
    updatedAt: dateStub.FEB_23_2023,
    localDateTime: dateStub.FEB_23_2023,
    isFavorite: true,
    isArchived: false,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'IMG_456',
    faces: [],
    sidecarPath: null,
    isReadOnly: false,
    isOffline: false,
    isExternal: false,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    exifInfo: {
      fileSizeInByte: 123_000,
    } as ExifEntity,
    deletedAt: null,
  }),

  noThumbhash: Object.freeze<AssetEntity>({
    id: 'asset-id',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: dateStub.FEB_23_2023,
    fileCreatedAt: dateStub.FEB_23_2023,
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.ext',
    resizePath: '/uploads/user-id/thumbs/path.ext',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    webpPath: '/uploads/user-id/webp/path.ext',
    thumbhash: null,
    encodedVideoPath: null,
    createdAt: dateStub.FEB_23_2023,
    updatedAt: dateStub.FEB_23_2023,
    localDateTime: dateStub.FEB_23_2023,
    isFavorite: true,
    isArchived: false,
    isReadOnly: false,
    isOffline: false,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    duration: null,
    isVisible: true,
    isExternal: false,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.ext',
    faces: [],
    sidecarPath: null,
    deletedAt: null,
  }),

  primaryImage: Object.freeze<AssetEntity>({
    id: 'asset-id',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: dateStub.FEB_23_2023,
    fileCreatedAt: dateStub.FEB_23_2023,
    owner: userStub.admin,
    ownerId: 'admin-id',
    deviceId: 'device-id',
    originalPath: '/original/path.jpg',
    resizePath: '/uploads/admin-id/thumbs/path.jpg',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    webpPath: '/uploads/admin-id/webp/path.ext',
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: dateStub.FEB_23_2023,
    updatedAt: dateStub.FEB_23_2023,
    localDateTime: dateStub.FEB_23_2023,
    isFavorite: true,
    isArchived: false,
    isReadOnly: false,
    duration: null,
    isVisible: true,
    isExternal: false,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    isOffline: false,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.jpg',
    faces: [],
    deletedAt: null,
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5_000,
    } as ExifEntity,
    stack: [{ id: 'stack-child-asset-1' } as AssetEntity, { id: 'stack-child-asset-2' } as AssetEntity],
  }),

  image: Object.freeze<AssetEntity>({
    id: 'asset-id',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: dateStub.FEB_23_2023,
    fileCreatedAt: dateStub.FEB_23_2023,
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.jpg',
    resizePath: '/uploads/user-id/thumbs/path.jpg',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    webpPath: '/uploads/user-id/webp/path.ext',
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: dateStub.FEB_23_2023,
    updatedAt: dateStub.FEB_23_2023,
    localDateTime: dateStub.FEB_23_2023,
    isFavorite: true,
    isArchived: false,
    isReadOnly: false,
    duration: null,
    isVisible: true,
    isExternal: false,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    isOffline: false,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.jpg',
    faces: [],
    deletedAt: null,
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5_000,
    } as ExifEntity,
  }),

  external: Object.freeze<AssetEntity>({
    id: 'asset-id',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: dateStub.FEB_23_2023,
    fileCreatedAt: dateStub.FEB_23_2023,
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/data/user1/photo.jpg',
    resizePath: '/uploads/user-id/thumbs/path.jpg',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    webpPath: '/uploads/user-id/webp/path.ext',
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: dateStub.FEB_23_2023,
    updatedAt: dateStub.FEB_23_2023,
    localDateTime: dateStub.FEB_23_2023,
    isFavorite: true,
    isArchived: false,
    isReadOnly: false,
    isExternal: true,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    isOffline: false,
    libraryId: 'library-id',
    library: libraryStub.externalLibrary1,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.jpg',
    faces: [],
    deletedAt: null,
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5_000,
    } as ExifEntity,
  }),

  offline: Object.freeze<AssetEntity>({
    id: 'asset-id',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: dateStub.FEB_23_2023,
    fileCreatedAt: dateStub.FEB_23_2023,
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.jpg',
    resizePath: '/uploads/user-id/thumbs/path.jpg',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    webpPath: '/uploads/user-id/webp/path.ext',
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: dateStub.FEB_23_2023,
    updatedAt: dateStub.FEB_23_2023,
    localDateTime: dateStub.FEB_23_2023,
    isFavorite: true,
    isArchived: false,
    isReadOnly: false,
    isExternal: false,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    isOffline: true,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.jpg',
    faces: [],
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5_000,
    } as ExifEntity,
    deletedAt: null,
  }),

  image1: Object.freeze<AssetEntity>({
    id: 'asset-id-1',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: dateStub.FEB_23_2023,
    fileCreatedAt: dateStub.FEB_23_2023,
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.ext',
    resizePath: '/uploads/user-id/thumbs/path.ext',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    webpPath: '/uploads/user-id/webp/path.ext',
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: dateStub.FEB_23_2023,
    updatedAt: dateStub.FEB_23_2023,
    deletedAt: null,
    localDateTime: dateStub.FEB_23_2023,
    isFavorite: true,
    isArchived: false,
    isReadOnly: false,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    isExternal: false,
    isOffline: false,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.ext',
    faces: [],
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5_000,
    } as ExifEntity,
  }),

  imageFrom2015: Object.freeze<AssetEntity>({
    id: 'asset-id-1',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: dateStub.JAN_01_1970,
    fileCreatedAt: dateStub.FEB_23_2015,
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.ext',
    resizePath: '/uploads/user-id/thumbs/path.ext',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    webpPath: '/uploads/user-id/webp/path.ext',
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: dateStub.FEB_23_2015,
    updatedAt: dateStub.FEB_23_2015,
    localDateTime: dateStub.FEB_23_2015,
    isFavorite: true,
    isArchived: false,
    isExternal: false,
    isReadOnly: false,
    isOffline: false,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.ext',
    faces: [],
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5_000,
    } as ExifEntity,
    deletedAt: null,
  }),

  video: Object.freeze<AssetEntity>({
    id: 'asset-id',
    originalFileName: 'asset-id.ext',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: dateStub.FEB_23_2023,
    fileCreatedAt: dateStub.FEB_23_2023,
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.ext',
    resizePath: '/uploads/user-id/thumbs/path.ext',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.VIDEO,
    webpPath: null,
    thumbhash: null,
    encodedVideoPath: null,
    createdAt: dateStub.FEB_23_2023,
    updatedAt: dateStub.FEB_23_2023,
    localDateTime: dateStub.FEB_23_2023,
    isFavorite: true,
    isArchived: false,
    isReadOnly: false,
    isExternal: false,
    isOffline: false,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    faces: [],
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 100_000,
    } as ExifEntity,
    deletedAt: null,
  }),

  livePhotoMotionAsset: Object.freeze({
    id: 'live-photo-motion-asset',
    originalPath: fileStub.livePhotoMotion.originalPath,
    ownerId: authStub.user1.user.id,
    type: AssetType.VIDEO,
    isVisible: false,
    fileModifiedAt: dateStub.JAN_01_1970,
    fileCreatedAt: dateStub.JAN_01_1970,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    exifInfo: {
      fileSizeInByte: 100_000,
    },
  } as AssetEntity),

  livePhotoStillAsset: Object.freeze({
    id: 'live-photo-still-asset',
    originalPath: fileStub.livePhotoStill.originalPath,
    ownerId: authStub.user1.user.id,
    type: AssetType.IMAGE,
    livePhotoVideoId: 'live-photo-motion-asset',
    isVisible: true,
    fileModifiedAt: dateStub.JAN_01_1970,
    fileCreatedAt: dateStub.JAN_01_1970,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    exifInfo: {
      fileSizeInByte: 25_000,
    },
  } as AssetEntity),

  withLocation: Object.freeze<AssetEntity>({
    id: 'asset-with-favorite-id',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: dateStub.FEB_22_2023,
    fileCreatedAt: dateStub.FEB_22_2023,
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    checksum: Buffer.from('file hash', 'utf8'),
    originalPath: '/original/path.ext',
    resizePath: '/uploads/user-id/thumbs/path.ext',
    sidecarPath: null,
    type: AssetType.IMAGE,
    webpPath: null,
    thumbhash: null,
    encodedVideoPath: null,
    createdAt: dateStub.FEB_22_2023,
    updatedAt: dateStub.FEB_22_2023,
    localDateTime: dateStub.FEB_22_2023,
    isFavorite: false,
    isArchived: false,
    isReadOnly: false,
    isExternal: false,
    isOffline: false,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.ext',
    faces: [],
    exifInfo: {
      latitude: 100,
      longitude: 100,
      fileSizeInByte: 23_456,
    } as ExifEntity,
    deletedAt: null,
  }),
  sidecar: Object.freeze<AssetEntity>({
    id: 'asset-id',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: dateStub.FEB_23_2023,
    fileCreatedAt: dateStub.FEB_23_2023,
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.ext',
    resizePath: '/uploads/user-id/thumbs/path.ext',
    thumbhash: null,
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    webpPath: null,
    encodedVideoPath: null,
    createdAt: dateStub.FEB_23_2023,
    updatedAt: dateStub.FEB_23_2023,
    localDateTime: dateStub.FEB_23_2023,
    isFavorite: true,
    isArchived: false,
    isReadOnly: false,
    isExternal: false,
    isOffline: false,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.ext',
    faces: [],
    sidecarPath: '/original/path.ext.xmp',
    deletedAt: null,
  }),

  readOnly: Object.freeze<AssetEntity>({
    id: 'read-only-asset',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: dateStub.FEB_23_2023,
    fileCreatedAt: dateStub.FEB_23_2023,
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.ext',
    resizePath: '/uploads/user-id/thumbs/path.ext',
    thumbhash: null,
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    webpPath: null,
    encodedVideoPath: null,
    createdAt: dateStub.FEB_23_2023,
    updatedAt: dateStub.FEB_23_2023,
    localDateTime: dateStub.FEB_23_2023,
    isFavorite: true,
    isArchived: false,
    isReadOnly: true,
    isExternal: false,
    isOffline: false,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.ext',
    faces: [],
    sidecarPath: '/original/path.ext.xmp',
    deletedAt: null,
  }),

  hasEncodedVideo: Object.freeze<AssetEntity>({
    id: 'asset-id',
    originalFileName: 'asset-id.ext',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: dateStub.FEB_23_2023,
    fileCreatedAt: dateStub.FEB_23_2023,
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.ext',
    resizePath: '/uploads/user-id/thumbs/path.ext',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.VIDEO,
    webpPath: null,
    thumbhash: null,
    encodedVideoPath: '/encoded/video/path.mp4',
    createdAt: dateStub.FEB_23_2023,
    updatedAt: dateStub.FEB_23_2023,
    localDateTime: dateStub.FEB_23_2023,
    isFavorite: true,
    isArchived: false,
    isReadOnly: false,
    isExternal: false,
    isOffline: false,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    faces: [],
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 100_000,
    } as ExifEntity,
    deletedAt: null,
  }),
};
