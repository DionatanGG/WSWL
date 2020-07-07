import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import {
	NzLayoutModule,
	NZ_I18N,
	pt_BR,
	NzAffixModule,
	NzAlertModule,
	NzAnchorModule,
	NzAutocompleteModule,
	NzAvatarModule,
	NzBackTopModule,
	NzBadgeModule,
	NzButtonModule,
	NzBreadCrumbModule,
	NzCalendarModule,
	NzCardModule,
	NzCarouselModule,
	NzCascaderModule,
	NzCheckboxModule,
	NzCollapseModule,
	NzCommentModule,
	NzDatePickerModule,
	NzDescriptionsModule,
	NzDividerModule,
	NzDrawerModule,
	NzDropDownModule,
	NzEmptyModule,
	NzFormModule,
	NzGridModule,
	NzI18nModule,
	NzIconModule,
	NzInputModule,
	NzInputNumberModule,
	NzListModule,
	NzMentionModule,
	NzMenuModule,
	NzMessageModule,
	NzModalModule,
	NzNoAnimationModule,
	NzNotificationModule,
	NzPageHeaderModule,
	NzPaginationModule,
	NzPopconfirmModule,
	NzPopoverModule,
	NzProgressModule,
	NzRadioModule,
	NzRateModule,
	NzResultModule,
	NzSelectModule,
	NzSkeletonModule,
	NzSliderModule,
	NzSpinModule,
	NzStatisticModule,
	NzStepsModule,
	NzSwitchModule,
	NzTableModule,
	NzTabsModule,
	NzTagModule,
	NzTimePickerModule,
	NzTimelineModule,
	NzToolTipModule,
	NzTransButtonModule,
	NzTransferModule,
	NzTreeModule,
	NzTreeSelectModule,
	NzTypographyModule,
	NzUploadModule,
	NzWaveModule,
} from 'ng-zorro-antd';
import pt from '@angular/common/locales/pt';

registerLocaleData(pt);

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		NzAffixModule,
		NzAlertModule,
		NzAnchorModule,
		NzAutocompleteModule,
		NzAvatarModule,
		NzBackTopModule,
		NzBadgeModule,
		NzButtonModule,
		NzBreadCrumbModule,
		NzCalendarModule,
		NzCardModule,
		NzCarouselModule,
		NzCascaderModule,
		NzCheckboxModule,
		NzCollapseModule,
		NzCommentModule,
		NzDatePickerModule,
		NzDescriptionsModule,
		NzDividerModule,
		NzDrawerModule,
		NzDropDownModule,
		NzEmptyModule,
		NzFormModule,
		NzGridModule,
		NzI18nModule,
		NzIconModule,
		NzInputModule,
		NzInputNumberModule,
		NzLayoutModule,
		NzListModule,
		NzMentionModule,
		NzMenuModule,
		NzMessageModule,
		NzModalModule,
		NzNoAnimationModule,
		NzNotificationModule,
		NzPageHeaderModule,
		NzPaginationModule,
		NzPopconfirmModule,
		NzPopoverModule,
		NzProgressModule,
		NzRadioModule,
		NzRateModule,
		NzResultModule,
		NzSelectModule,
		NzSkeletonModule,
		NzSliderModule,
		NzSpinModule,
		NzStatisticModule,
		NzStepsModule,
		NzSwitchModule,
		NzTableModule,
		NzTabsModule,
		NzTagModule,
		NzTimePickerModule,
		NzTimelineModule,
		NzToolTipModule,
		NzTransButtonModule,
		NzTransferModule,
		NzTreeModule,
		NzTreeSelectModule,
		NzTypographyModule,
		NzUploadModule,
		NzWaveModule,
	],
	exports: [
		NzAffixModule,
		NzAlertModule,
		NzAnchorModule,
		NzAutocompleteModule,
		NzAvatarModule,
		NzBackTopModule,
		NzBadgeModule,
		NzButtonModule,
		NzBreadCrumbModule,
		NzCalendarModule,
		NzCardModule,
		NzCarouselModule,
		NzCascaderModule,
		NzCheckboxModule,
		NzCollapseModule,
		NzCommentModule,
		NzDatePickerModule,
		NzDescriptionsModule,
		NzDividerModule,
		NzDrawerModule,
		NzDropDownModule,
		NzEmptyModule,
		NzFormModule,
		NzGridModule,
		NzI18nModule,
		NzIconModule,
		NzInputModule,
		NzInputNumberModule,
		NzLayoutModule,
		NzListModule,
		NzMentionModule,
		NzMenuModule,
		NzMessageModule,
		NzModalModule,
		NzNoAnimationModule,
		NzNotificationModule,
		NzPageHeaderModule,
		NzPaginationModule,
		NzPopconfirmModule,
		NzPopoverModule,
		NzProgressModule,
		NzRadioModule,
		NzRateModule,
		NzResultModule,
		NzSelectModule,
		NzSkeletonModule,
		NzSliderModule,
		NzSpinModule,
		NzStatisticModule,
		NzStepsModule,
		NzSwitchModule,
		NzTableModule,
		NzTabsModule,
		NzTagModule,
		NzTimePickerModule,
		NzTimelineModule,
		NzToolTipModule,
		NzTransButtonModule,
		NzTransferModule,
		NzTreeModule,
		NzTreeSelectModule,
		NzTypographyModule,
		NzUploadModule,
		NzWaveModule,
	],
	providers: [{ provide: NZ_I18N, useValue: pt_BR }],
})
export class AntdModule {}
