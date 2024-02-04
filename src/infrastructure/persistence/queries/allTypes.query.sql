select
  ty.mtyp_id,
  ty.mtyp_name
from
  public.pf_med_type ty
order by
  ty.mtyp_id asc;