import { NgModule } from '@angular/core';
import { ExplainDeptIdPipe } from './explain-dept-id/explain-dept-id';
import { ExplainDutyIdPipe } from './explain-duty-id/explain-duty-id';
import { ExplainPowerPipe } from './explain-power/explain-power';
import { ExplainBossPipe } from './explain-boss/explain-boss';
import { ExplainCheckFlagPipe } from './explain-check-flag/explain-check-flag';
import { ExplainCommentPipe } from './explain-comment/explain-comment';
import { ExplainHonorPipe } from './explain-honor/explain-honor';
@NgModule({
	declarations: [ExplainDeptIdPipe,
    ExplainDutyIdPipe,
    ExplainPowerPipe,
    ExplainBossPipe,
    ExplainCheckFlagPipe,
    ExplainCommentPipe,
    ExplainHonorPipe],
	imports: [],
	exports: [ExplainDeptIdPipe,
    ExplainDutyIdPipe,
    ExplainPowerPipe,
    ExplainBossPipe,
    ExplainCheckFlagPipe,
    ExplainCommentPipe,
    ExplainHonorPipe]
})
export class PipesModule {}
