var licenseAgreement;
var docIdToDownload;
var gateLevel;
var additionalInfoNumber;
var partId = '';

function checkLevel2(docId, partId, licenseAgreement, additionalInfoNumber) {
 	$.ajax({
        method: 'POST',
        url: '/PowerSolutions/gatedDocument.do',
        data: { method: 'checkLevelTwo', docId: docId },
        dataType: 'html',
        success: function(data) {
           	if (data == 'NEW') {
           		openExistingRequestInfo();
           	} else if (data == 'APPROVED') {
           		sendDownloadForm(docId, partId, licenseAgreement, additionalInfoNumber);
         	} else {
        		createNewRequest(docId, partId, licenseAgreement, additionalInfoNumber);
          	}
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.responseText);
        }
   });
}
    
function sendDownloadForm(docId, partId, licenseAgreement, additionalInfoNumber) {
	document.location.href = '/PowerSolutions/gatedDocument.do?method=getGatedDocument&docId=' + docId + '&partId=' + partId + '&licenseAgreement=' + licenseAgreement 
			+ '&additionalInfoNumber=' + encodeURIComponent(additionalInfoNumber);
}
    
function createNewRequest(docId, partId, licenseAgreement, additionalInfoNumber) {
   	$.ajax({
        method: 'POST',
        url: '/PowerSolutions/gatedDocument.do',
        data: { method: 'getGatedDocument', 
        	docId: docId, 
        	partId: partId, 
         	licenseAgreement: licenseAgreement, 
         	additionalInfoNumber: additionalInfoNumber
        },            
        dataType: 'html',
        success: function(data) {            	
           	openNewRequestInfo();
        }
    });
}

function openLicenseDialog() {
	$('#licenseAgreement').dialog('open');
}

function openAdditionalInfo(additionalInfo) {
	$('#additionalInfo').html(additionalInfo);
	$('#additionalInfo').dialog('open');
}

function openNewRequestInfo() {     	
	$('#newRequestInfo').dialog('open');
}

function openExistingRequestInfo() {
	$('#existingRequestInfo').dialog('open');
}

$(document).ready(function() {
	
    var licenseDialog = $('#licenseAgreement').dialog({
        autoOpen: false,
        maxHeight: 700,
        width: 480,
        modal: true,
        buttons: {
            'Accept': function() {
                licenseAgreement = 'T';
                licenseDialog.dialog('close');
                $.ajax({
                    method: 'POST',
                    url: '/PowerSolutions/gatedDocument.do',
                    data: { method: 'getAdditionalInfo', docId: docIdToDownload },
                    dataType: 'html',
                    success: function(data) {                       
                        if (data.indexOf('additionalInfoNumber') >= 0) {
                            openAdditionalInfo(data);
                        } else {
                            additionalInfoNumber = '';
                            if (gateLevel == 1) {
                                sendDownloadForm(docIdToDownload, partId, licenseAgreement, additionalInfoNumber);
                            } else if (gateLevel == 2) {
                                checkLevel2(docIdToDownload, partId, licenseAgreement, additionalInfoNumber);
                            }
                        }
                    }
               });
            },
            'Decline' : function() {
                licenseAgreement = 'F';
                licenseDialog.dialog('close');                      
            }
        },
        close: function() {
        }
    });
    
    var additionalDialog = $('#additionalInfo').dialog({
        autoOpen: false,
        height: 'auto',
        width: 480,
        modal: true,
        buttons: {
            'Submit': function() {
                additionalInfoNumber = $(this).find('#additionalInfoNumber').val();
                if (!$.trim(additionalInfoNumber).length) {
                    if (!$('#additionalInfo').has('.stdErrorMessage').length) {
                        $('#additionalInfo').append('<div class="stdErrorMessage centered">Please fill in the number.</div>');
                    }
                } else {
                    if (gateLevel == 1) {
                        sendDownloadForm(docIdToDownload, partId, licenseAgreement, additionalInfoNumber);
                    } else if (gateLevel == 2) {
                        checkLevel2(docIdToDownload, partId, licenseAgreement, additionalInfoNumber);
                    }                       
                    additionalDialog.dialog('close');
                }                                
            },                
        },
        close: function() {
        }
    });
    
    var newRequestInfo = $('#newRequestInfo').dialog({
        autoOpen: false,
        height: 'auto',
        width: 420,
        modal: true,
        buttons: {
            'Close' : function() {
                newRequestInfo.dialog('close');
            }
        }
    });
    
    var existingRequestInfo = $('#existingRequestInfo').dialog({
        autoOpen: false,
        height: 'auto',
        width: 420,
        modal: true,
        buttons: {
            'Close' : function() {
            	existingRequestInfo.dialog('close');
            }
        }
    });
    
    $(document).on('keyup', '#additionalInfoNumber', function(e) {
        additionalInfoNumber = $(this).val();
    });
    
    $(document).on('click', '#tooltips .gated', function(e) {
        e.preventDefault();
        docIdToDownload = $(this).attr('id');
        gateLevel = $(this).hasClass('gateLevel2') ? 2 : 1;
        if (userLogged()) {
            openLicenseDialog();
        } else {
            setKeepLoginDialog(true);
            setupSuccessCallback('openLicenseDialog');
            showLoginDialog($(this).attr('id'), null, 0, 'true');
        }        
    });
    
    $(document).on('mouseout', '#tooltips .gated', function(e) {
        setKeepLoginDialog(false); 
        hideLoginDialog();  
    });
});