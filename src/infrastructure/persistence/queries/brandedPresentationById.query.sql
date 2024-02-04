select
  bp.mbpr_id,
  bp.mbpr_quantity,
  bp.mbme_id
from
  public.pf_med_branded_presentation bp
where
  bp.mbpr_id = $1
order by
  bp.mbpr_id asc;