/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/* global document */

import ClassicTestEditor from '@ckeditor/ckeditor5-core/tests/_utils/virtualtesteditor';
import ImageEngine from '@ckeditor/ckeditor5-image/src/image/imageengine';
import ImageUploadEngine from '../../src/imageuploadengine';
import ImageUploadProgress from '../../src/imageuploadprogress';

ClassicTestEditor.create( { plugins: [ ImageEngine, ImageUploadEngine, ImageUploadProgress ] } )
	.then( editor => {
		const imageUploadProgress = editor.plugins.get( ImageUploadProgress );
		const img = document.createElement( 'img' );

		img.src = imageUploadProgress.placeholder;
		document.getElementById( 'container' ).appendChild( img );
	} );

